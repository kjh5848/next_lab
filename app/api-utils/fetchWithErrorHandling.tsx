'use client';

import { useError } from '../contexts/ErrorContext';

interface FetchOptions extends RequestInit {
  errorMessage?: string;
  showToast?: boolean;
  severity?: 'low' | 'medium' | 'high' | 'critical';
}

export const useFetchWithErrorHandling = () => {
  const { addError } = useError();

  const fetchWithErrorHandling = async <T,>(
    url: string,
    options?: FetchOptions
  ): Promise<T | null> => {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        let errorMessage = options?.errorMessage || '요청 처리 중 오류가 발생했습니다';
        let errorDetails: any = {};
        
        // 응답이 JSON인 경우 에러 정보 추출
        try {
          const errorData = await response.json();
          if (errorData.message) {
            errorMessage = errorData.message;
          }
          errorDetails = errorData;
        } catch (_) {
          // JSON이 아닐 경우 무시
        }

        const error = new Error(errorMessage);
        Object.assign(error, { 
          status: response.status, 
          details: errorDetails 
        });
        
        throw error;
      }

      return await response.json() as T;
    } catch (err) {
      const error = err as Error;
      
      addError(
        error.message || '데이터를 가져오는 중 오류가 발생했습니다',
        error,
        {
          severity: options?.severity || 'medium',
          source: 'api',
          showToast: options?.showToast ?? true,
          context: {
            url,
            method: options?.method || 'GET',
          },
        }
      );
      
      return null;
    }
  };

  return { fetchWithErrorHandling };
};