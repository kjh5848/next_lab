'use client';

import { createContext, useContext, ReactNode } from 'react';
import { AppError, ErrorSeverity } from '../types/error';
import { useErrorSystem } from '../hooks/useErrorSystem';
import { Toaster } from 'react-hot-toast';

interface ErrorContextType {
  errors: AppError[];
  hasUnreadErrors: boolean;
  addError: (message: string, error?: Error | null, options?: {
    severity?: ErrorSeverity;
    source?: string;
    context?: Record<string, unknown>;
    showToast?: boolean;
    redirectOnCritical?: boolean;
    criticalRedirectPath?: string;
  }) => AppError;
  clearErrors: () => void;
  markErrorsAsRead: () => void;
  removeError: (errorId: string) => void;
  isPending: boolean;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export function ErrorProvider({ children }: { children: ReactNode }) {
  const errorSystem = useErrorSystem();
  
  return (
    <ErrorContext.Provider value={errorSystem}>
      <Toaster position="top-right" />
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
}
