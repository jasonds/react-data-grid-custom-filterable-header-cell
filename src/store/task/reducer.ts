import Redux from 'redux';
import * as POC from '../../core';
import { TaskState, TaskActionTypes, TASKS_LOADING, TASKS_SUCCESS, TASKS_FAILURE } from './types';

const initialState: TaskState = {
  error: undefined,
  isLoading: false,
  tasks: undefined
};

const taskReducer: Redux.Reducer<TaskState> = (state = initialState, action: TaskActionTypes): TaskState => {
  switch (action.type) {
    case TASKS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: undefined
      };
    case TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: action.payload as POC.Models.Task[],
        error: undefined
      };
    case TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload as POC.Models.POCError,
        tasks: undefined
      };
    default:
      return state;
  }
};

export default taskReducer;
