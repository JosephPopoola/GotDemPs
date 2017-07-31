import {  
  applyMiddleware,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from "redux-logger";

import rootReducer from '../reducers'

const logger = createLogger();

export function configureStore(initialState = {}) {  
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  )
  return store;
};

export const store = configureStore(); 