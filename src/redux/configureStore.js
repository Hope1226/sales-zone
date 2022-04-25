import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import testReducer from './test/test.js'
import thunk from 'redux-thunk';

const reducers = combineReducers({ testReducer });

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
