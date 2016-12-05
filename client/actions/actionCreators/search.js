import Fuse from 'fuse.js';

import {SEARCH} from '../actionTypes';
import store from '../../store';

// Criterion: the seach field
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
    type: SEARCH.FILTER_AFTER_SEARCH_FIELD,
    searchText,
    filteredVehicles
  }
}

// Criterion: the brand drop down
export function filterAfterBrandDropdown( brandDropdown ) {
  let filteredVehicles = [ ];
  const models = store.getState( ).posts.items.models;

  if ( brandDropdown.length != 0 ) {
    filteredVehicles = models.filter( ( value ) => { return value.make === brandDropdown } ) ;
  } else {
    filteredVehicles = models
  }

  return {
    type: SEARCH.FILTER_AFTER_BRAND_DROPDOWN,
    brandDropdown,
    filteredVehicles
  }
}

// Criterion: the brand and model drop downs
export function filterAfterModelDropdown( filterDropdown ) {
  let filteredVehicles = [ ];
  const models = store.getState( ).posts.items.models;

  if ( filterDropdown.modelName.length != 0 ) {
    filteredVehicles = models.filter( ( value ) => { return value.name === filterDropdown.modelName } ) ;
  } else {
    filteredVehicles = models.filter( ( value ) => { return value.make === filterDropdown.brandName } ) ;
  }

  return {
    type: SEARCH.FILTER_AFTER_MODEL_DROPDOWN,
    filterDropdown,
    filteredVehicles
  }
}
