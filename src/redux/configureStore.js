import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import testReducer from './test/test';

const reducers = combineReducers({ testReducer });

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
