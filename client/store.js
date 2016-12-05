import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { fetchPosts } from './actions/actionCreators/posts';
import { filterAfterSearchField } from './actions/actionCreators/search';
import rootReducer from './reducers/index';

// loggerMiddleware
const loggerMiddleware = createLogger();

// Create store with rootReducer and middleware
const store = createStore (
  rootReducer,
  applyMiddleware (
    thunkMiddleware,
    loggerMiddleware
  )
)

// Get car market data
store.dispatch( fetchPosts( ) );

export default store;
