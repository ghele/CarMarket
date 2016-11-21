import {store} from '../reducers/reducer';

import * as types from './actionTypes';

export function receiveCarMarket( carData ) {
  return {
    type: types.RECEIVE_CAR_MARKET,
    carData,
    name: "Raoul"
  }
}

export function filterAfterSearchField( searchText ) {
  console.log("GET_STATE - FILTER_AFTER_SEARCH_FIELD", store.getState( ));
  // do the filtering
  return {
    type: types.FILTER_AFTER_SEARCH_FIELD,
    searchText,
    filteredData
  }
}
