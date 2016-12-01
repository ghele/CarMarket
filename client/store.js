import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
import fetchPosts from './actions/actionCreators/posts'
import rootReducer from './reducers'
