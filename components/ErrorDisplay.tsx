'use client';

import { useState } from 'react';
import { useError } from '../app/contexts/ErrorContext';
import { motion, AnimatePresence } from 'framer-motion';
import { AppError } from '../app/types/error';

interface ErrorDisplayProps {
  maxVisible?: number;
}

export default function ErrorDisplay({ maxVisible = 3 }: ErrorDisplayProps) {
  const { errors, hasUnreadErrors, markErrorsAsRead, removeError } = useError();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleErrors = isExpanded ? errors : errors.slice(0, maxVisible);
  
  if (errors.length === 0) {
    return null;
  }
  
  return (
    <div 
      className="fixed bottom-4 right-4 z-50 w-full max-w-sm"
      onClick={() => hasUnreadErrors && markErrorsAsRead()}
    >
      <AnimatePresence>
        {visibleErrors.map((error) => (
          <ErrorCard 
            key={error.id} 
            error={error} 
            onClose={() => removeError(error.id)} 
          />
        ))}
      </AnimatePresence>
      
      {errors.length > maxVisible && !isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="mt-2 w-full py-2 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition-colors"
        >
          {errors.length - maxVisible}개 더 보기
        </button>
      )}
      
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="mt-2 w-full py-2 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition-colors"
        >
          접기
        </button>
      )}
    </div>
  );
}

function ErrorCard({ error, onClose }: { error: AppError; onClose: () => void }) {
  const colors = {
    low: 'bg-blue-50 border-blue-200',
    medium: 'bg-yellow-50 border-yellow-200',
    high: 'bg-orange-50 border-orange-200',
    critical: 'bg-red-50 border-red-200',
  };
  
  const bgColor = colors[error.severity || 'medium'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className={`mb-2 p-4 rounded-lg shadow-md border ${bgColor} relative`}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        aria-label="닫기"
      >
        &times;
      </button>
      
      <div className="flex items-start">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900">{error.message}</p>
          
          {error.source && (
            <p className="text-xs text-gray-500 mt-1">
              출처: {error.source}
            </p>
          )}
          
          <p className="text-xs text-gray-500 mt-1">
            {new Date(error.timestamp).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </motion.div>
  );
}