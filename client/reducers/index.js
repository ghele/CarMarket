import {combineReducers} from 'redux';
import * as types from '../actions/actionTypes'
import {posts} from './posts';
import {search} from './search';

const rootReducer = combineReducers( { posts, search } );

export default rootReducer;
