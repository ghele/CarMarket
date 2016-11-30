// let's go!
// EDMUNDS API http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc
import React from 'react';
import ReactDOM from 'react-dom';
import fetchPosts from './actions/actionCreators'
import Main from './components/containers/Main';

ReactDOM.render( <Main />, document.getElementById('root'))

//
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
