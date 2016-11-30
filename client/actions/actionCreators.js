import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';
// import posts from '../reducers/posts';

export function requestPosts( ) {
  return {
    type: types.REQUEST_POSTS
  }
}

export function receivePosts( json ) {
  return {
    type: types.RECEIVE_POSTS,
    posts: json,
    receivedAt: Date.now()
  }
}

export function fetchPosts() {
  return function (dispatch) {
    dispatch( requestPosts( ) )

    return fetch('http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc')
      .then( response => response.json( ) )
      .then( response => {
        console.log("RESPONSE", response);
        dispatch( receivePosts( response ) )
      }
      )

  }
}
