// src/store.ts
import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from './reducers/jobReducer';
import { JobsState } from './types';

export interface RootState {
  jobs: JobsState;
}

const rootReducer = combineReducers<RootState>({
  jobs: jobsReducer,
});

const loadStateFromLocalStorage = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState) as RootState;
  } catch (err) {
    return undefined;
  }
};
const saveStateToLocalStorage = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
  }
};
const persistedState = loadStateFromLocalStorage();
const store: Store<RootState> = createStore(rootReducer, persistedState, applyMiddleware(thunk));
store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage(state);
});

export default store;