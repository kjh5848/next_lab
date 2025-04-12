'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useError } from './contexts/ErrorContext';

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { addError } = useError();
  
  useEffect(() => {
    // 에러를 컨텍스트에 추가하여 일관된 관리
    addError(
      error.message || '애플리케이션에 치명적인 오류가 발생했습니다', 
      error, 
      { severity: 'critical', source: 'global' }
    );
  }, [error, addError]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 rounded-lg bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-red-600 mb-4">에러가 발생했습니다</h1>
        <p className="text-gray-700 mb-6">{error.message || '알 수 없는 오류가 발생했습니다'}</p>
        
        <div className="flex flex-col space-y-3">
          <button
            onClick={reset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            다시 시도
          </button>
          
          <Link 
            href="/"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors text-center"
          >
            홈으로 돌아가기
          </Link>
        </div>
        
        {error.digest && (
          <p className="mt-6 text-xs text-gray-500">
            오류 참조 코드: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
