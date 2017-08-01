import {  
  applyMiddleware,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import rootReducer from '../reducers'

export function configureStore(initialState = {}) {  
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  )
  return store;
};

export const store = configureStore(); 