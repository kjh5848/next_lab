'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AppError } from '../app/types/error';

interface Props {
  children: ReactNode;
  fallback?: (error: AppError, reset: () => void) => ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  error: AppError | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      error: {
        message: error.message || '컴포넌트 렌더링 중 오류가 발생했습니다',
        code: error.name,
        severity: 'high',
        source: 'component',
        timestamp: Date.now(),
        id: Date.now().toString(),
      },
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public resetError = () => {
    this.setState({ error: null });
  };

  public render() {
    if (this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.resetError);
      }
      
      return (
        <div className="p-4 rounded-md bg-red-50 border border-red-200">
          <h3 className="text-lg font-medium text-red-800">컴포넌트 오류</h3>
          <p className="mt-2 text-sm text-red-700">{this.state.error.message}</p>
          <button
            className="mt-3 px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
            onClick={this.resetError}
          >
            다시 시도
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}