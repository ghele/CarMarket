import * as types from '../actionTypes';
import store from '../../store';

export function filterAfterSearchField( searchText ) {
  return {
    type: types.FILTER_AFTER_SEARCH_FIELD,
    searchText
  }
}

export function filterAfterBrandDropdown( brandDropdown ) {
  let filteredVehicles = [ ]
  const models = store.getState( ).posts.items.models;

  if ( brandDropdown.length != 0 ) {
    filteredVehicles = models.filter( ( value ) => { return value.make === brandDropdown } ) ;
  } else {
    filteredVehicles = models
  }

  return {
    type: types.FILTER_AFTER_BRAND_DROPDOWN,
    brandDropdown,
    filteredVehicles
  }
}

export function filterAfterModelDropdown( filterDropdown ) {
  return {
    type: types.FILTER_AFTER_MODEL_DROPDOWN,
    filterDropdown
  }
}
