import { Action } from 'redux';

export interface POCAction<TPayload = any, TAction = string> extends Action<TAction> {
  readonly type: TAction;
  readonly payload?: TPayload;
  readonly error?: boolean;
  readonly meta?: any;
}

export interface POCError extends Error {
  response?: {
    message: string;
    title: string;
    status: number;
  };
}

export interface Task {
  id: string;
  order: number;
  title: string;
  description: string;
}
