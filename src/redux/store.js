import { createStore } from 'redux';
import { Reducer } from './reducer';

export const Store = () => {
  const store = createStore(
    Reducer, // reducer
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
