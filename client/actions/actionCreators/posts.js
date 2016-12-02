import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import * as types from '../actionTypes';
import store from '../../store';

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

export function fetchPosts( ) {
  const edmundsAPI = 'http://api.edmunds.com/api/vehicle/v2';

  let id = 0;
  let marketData = {
    models: [ ],
    name: [ ]
  };

  return function (dispatch) {
    dispatch( requestPosts( ) )

    return fetch( `${ edmundsAPI }/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc` )
      .then( response => response.json( ) )
      .then( response => {
        response.makes.forEach( function( entry ) {
            marketData.name.push( entry.name );
            entry.models.forEach( function( model ) {
                marketData.models.push ( {
                    id: id++,
                    name: model.name,
                    make: entry.name,
                    isSelected: false
                } );
            } );
        } )
        dispatch( receivePosts( marketData ) )
      }
      )

  }
}

// TO-DO: Put in a separate file
export function toggleVehicle( vehicleId ) {
  const { isFetching, lastUpdated } = store.getState( ).posts;
  const names = store.getState( ).posts.items.name;
  const { make, name, isSelected } = store.getState( ).posts.items.models[vehicleId];

  return {
    type: types.TOGGLE_VEHICLE,
    isFetching,
    lastUpdated,
    names,
    vehicleId,
    name,
    make,
    isSelected
  }
}
