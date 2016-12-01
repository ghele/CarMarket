// let's go!
// EDMUNDS API http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/containers/Main';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchPosts } from './actions/actionCreators/posts';
import { filterAfterSearchField } from './actions/actionCreators/search';
import rootReducer from './reducers/index';

ReactDOM.render( <Main />, document.getElementById('root'))

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

store.dispatch( filterAfterSearchField ('Hummer') );

// const initialState = {
//   posts: {
//     isFetching: false,
//     lastUpdated: 0,
//     items: { }
//   },
//   filters: {
//     searchText: "",
//     brandDropdown: "",
//     modelDropdown: ""
//   },
//   cart: [ ]
// }
