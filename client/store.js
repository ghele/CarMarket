import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { fetchPosts } from './actions/actionCreators/posts';
import { filterAfterSearchField } from './actions/actionCreators/search';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

const store = createStore (
  rootReducer,
  applyMiddleware (
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch( fetchPosts( ) ).then( ( ) =>
  console.log("store.getState()", store.getState())
)

export default store;
