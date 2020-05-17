import { applyMiddleware, compose, combineReducers, Middleware, Store, createStore as reduxCreateStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import taskReducer from './task/reducer';

const rootReducer = combineReducers({
  taskState: taskReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const createStore = (preloadedState?: Partial<AppState>): Store<AppState> => {
  const middlewares: Middleware[] = [thunkMiddleware];

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return reduxCreateStore(rootReducer, preloadedState || {}, composeEnhancers(applyMiddleware(...middlewares)));
};

export const store = createStore();
