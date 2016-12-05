import Fuse from 'fuse.js';

import * as types from '../actionTypes';
import store from '../../store';

export function filterAfterSearchField( searchText ) {
  let filteredVehicles = [ ];
  const models = store.getState( ).posts.items.models;
  const options = {
    threshold: 0.3,
    keys: ['name', 'make']
  }
  const fuse = new Fuse( models, options );

  if ( searchText.length != 0 ) {
    filteredVehicles = fuse.search( searchText );
  } else {
    filteredVehicles = models
  }

  return {
    type: types.FILTER_AFTER_SEARCH_FIELD,
    searchText,
    filteredVehicles
  }
}

export function filterAfterBrandDropdown( brandDropdown ) {
  let filteredVehicles = [ ];
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
  let filteredVehicles = [ ];
  const models = store.getState( ).posts.items.models;

  if ( filterDropdown.modelName.length != 0 ) {
    filteredVehicles = models.filter( ( value ) => { return value.name === filterDropdown.modelName } ) ;
  } else {
    filteredVehicles = models.filter( ( value ) => { return value.make === filterDropdown.brandName } ) ;
  }

  return {
    type: types.FILTER_AFTER_MODEL_DROPDOWN,
    filterDropdown,
    filteredVehicles
  }
}
