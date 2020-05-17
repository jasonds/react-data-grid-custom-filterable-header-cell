import { ThunkAction } from 'redux-thunk';
import * as POC from './../../core';
import { AppState } from './..';
import { TASKS_LOADING, TASKS_SUCCESS, TASKS_FAILURE } from './types';
import { TaskService } from '../../services';

const loadTasksAction = () => {
  return {
    type: TASKS_LOADING
  };
};

const tasksSuccessAction = (payload: POC.Models.Task[]) => {
  return {
    type: TASKS_SUCCESS,
    payload
  };
};

const tasksFailureAction = (error: POC.Models.POCError) => {
  return {
    type: TASKS_FAILURE,
    payload: error,
    error: true
  };
};

// thunk actions

export const getTasks = (): ThunkAction<Promise<void>, AppState, null, POC.Models.POCAction> => async dispatch => {
  dispatch(loadTasksAction());
  try {
    const tasks = await TaskService.getTasks();
    dispatch(tasksSuccessAction(tasks));
  } catch (error) {
    dispatch(tasksFailureAction(error));
  }
};
