'use client';

import { useState, useCallback, useEffect, useTransition } from 'react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { AppError, ErrorSeverity } from '../types/error';

interface ErrorOptions {
  severity?: ErrorSeverity;
  source?: string;
  context?: Record<string, unknown>;
  showToast?: boolean;
  redirectOnCritical?: boolean;
  criticalRedirectPath?: string;
}

const DEFAULT_OPTIONS: ErrorOptions = {
  severity: 'medium',
  showToast: true,
  redirectOnCritical: true,
  criticalRedirectPath: '/error',
};

export function useErrorSystem() {
  const [errors, setErrors] = useState<AppError[]>([]);
  const [hasUnreadErrors, setHasUnreadErrors] = useState<boolean>(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const addError = useCallback((message: string, error?: Error | null, options: ErrorOptions = {}) => {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    const errorCode = error?.name || 'APP_ERROR';
    
    const appError: AppError = {
      message,
      code: errorCode,
      severity: opts.severity,
      source: opts.source || 'client',
      timestamp: Date.now(),
      id: nanoid(),
      context: opts.context,
    };
    
    setErrors(prev => [appError, ...prev]);
    setHasUnreadErrors(true);
    
    // 토스트 알림 표시
    if (opts.showToast) {
      toast.error(message, {
        id: appError.id,
        duration: appError.severity === 'critical' ? 6000 : 4000,
      });
    }
    
    // 심각한 오류 발생 시 리다이렉트
    if (opts.redirectOnCritical && appError.severity === 'critical') {
      startTransition(() => {
        router.push(opts.criticalRedirectPath || '/error');
      });
    }
    
    // 선택적으로 에러 로깅 서비스에 오류 보고
    if (appError.severity === 'high' || appError.severity === 'critical') {
      // 예: reportErrorToService(appError);
      console.error('Critical error:', appError);
    }
    
    return appError;
  }, [router]);
  
  const clearErrors = useCallback(() => {
    setErrors([]);
    setHasUnreadErrors(false);
  }, []);
  
  const markErrorsAsRead = useCallback(() => {
    setHasUnreadErrors(false);
  }, []);
  
  const removeError = useCallback((errorId: string) => {
    setErrors(prev => prev.filter(err => err.id !== errorId));
  }, []);
  
  // 에러 발생 시 서비스 워커로 오프라인 로깅
  useEffect(() => {
    const handleWindowError = (event: ErrorEvent) => {
      addError(
        event.message || '예상치 못한 오류가 발생했습니다',
        event.error, 
        { severity: 'high', source: 'window' }
      );
    };
    
    window.addEventListener('error', handleWindowError);
    return () => window.removeEventListener('error', handleWindowError);
  }, [addError]);
  
  return {
    errors,
    hasUnreadErrors,
    addError,
    clearErrors,
    markErrorsAsRead,
    removeError,
    isPending,
  };
}