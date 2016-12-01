import { compose } from 'redux';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { fetchPosts } from './actions/actionCreators/posts';
// import the root reducer
import rootReducer from './reducers/index';

import { filterAfterSearchField } from './actions/actionCreators/search';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(fetchPosts()).then(() =>
  console.log(store.getState())
)

// store.dispatch( filterAfterSearchField ('Hummer') );
export default store;
