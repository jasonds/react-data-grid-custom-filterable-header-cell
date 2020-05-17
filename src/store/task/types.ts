import * as POC from './../../core';

export interface TaskState {
  error?: POC.Models.POCError;
  isLoading: boolean;
  tasks?: POC.Models.Task[];
}

export const TASKS_LOADING = 'TASKS_LOADING';
export const TASKS_SUCCESS = 'TASKS_SUCCESS';
export const TASKS_FAILURE = 'TASKS_FAILURE';

interface TaskLoading extends POC.Models.POCAction<undefined, typeof TASKS_LOADING> {
  type: typeof TASKS_LOADING;
}

interface TaskSuccess extends POC.Models.POCAction<POC.Models.Task[], typeof TASKS_SUCCESS> {
  type: typeof TASKS_SUCCESS;
  payload: POC.Models.Task[];
}

interface TaskFailure extends POC.Models.POCAction<POC.Models.POCError, typeof TASKS_FAILURE> {
  type: typeof TASKS_FAILURE;
  payload: POC.Models.POCError;
}

export type TaskActionTypes = TaskLoading | TaskSuccess | TaskFailure;
