import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
import fetchPosts from './actions/actionCreators'
import rootReducer from './reducers'


function myFunction() {
  console.log("woreng");
}
