// src/store.ts
import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk'; // Optional - For handling asynchronous actions
import  { JobsState } from './types';
import jobsReducer from './reducers/jobReducer';

// If you have multiple reducers, combine them here
export interface RootState {
  jobs: JobsState;
  // Add other states here if needed
}

const rootReducer = combineReducers<RootState>({
  jobs: jobsReducer,
  // Add other reducers here if needed
});

const store: Store<RootState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;