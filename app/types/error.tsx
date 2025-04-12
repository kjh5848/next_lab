export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

    export interface AppError {
    message: string;
    code?: string;
    severity?: ErrorSeverity;
    source?: string;
    timestamp: number;
    id: string;
    context?: Record<string, unknown>;
    }

    export interface ErrorState {
    errors: AppError[];
    hasUnreadErrors: boolean;
    }