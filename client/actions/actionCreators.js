import {store} from '../reducers/reducer';
import * as types from './actionTypes';

export function receiveCarMarket( carData ) {
  return {
    type: types.RECEIVE_CAR_MARKET,
    carData
  }
}

export function filterAfterSearchField( searchText ) {
  let filteredData = [ ];
  const models = store.getState( ).carData.models;
  const options = {
    threshold: 0.3,
    keys: ['name', 'make']
  }
  const fuse = new Fuse( models, options );

  if ( searchText.length != 0 ) {
    filteredData = fuse.search( searchText );
  } else {
    filteredData = models
  }

  return {
    type: types.FILTER_AFTER_SEARCH_FIELD,
    searchText,
    filteredData
  }
}

export function filterAfterBrandDropdown( brandDropdown ) {
  let filteredData = [ ]
  const models = store.getState( ).carData.models;

  if ( brandDropdown.length != 0 ) {
    filteredData = models.filter( ( value ) => { return value.make === brandDropdown } ) ;
  } else {
    filteredData = models
  }

  return {
    type: types.FILTER_AFTER_BRAND_DROPDOWN,
    brandDropdown,
    filteredData
  }
}

export function filterAfterModelDropdown( filterDropdown ) {
  let filteredData = []
  const models = store.getState( ).carData.models;

  if ( filterDropdown.modelDropdown.length != 0 ) {
    filteredData = models.filter( ( value ) => { return value.name === filterDropdown.modelDropdown } ) ;
  } else {
    filteredData = models.filter( ( value ) => { return value.make === filterDropdown.brandDropdown } ) ;
  }

  return {
    type: types.FILTER_AFTER_MODEL_DROPDOWN,
    filterDropdown,
    filteredData
  }
}

export function addRemoveCartItem( addRemoveItem ) {
  let state = store.getState( );
  let carData = store.getState( ).carData;
  let filteredData = store.getState( ).filteredData;

  Object.assign( carData, carData.models[ addRemoveItem.carId ].isSelected = !carData.models[ addRemoveItem.carId ].isSelected );
  Object.assign( state, { cartData: carData.models.filter( ( value ) => { return value.isSelected === true } ) }  );

  return {
    type: types.ADD_REMOVE_CART_ITEM,
    carData,
    filteredData,
    cartData: state.cartData
  }
}

export function completeTransaction( ) {
  let carData = { };

  carData.models = store.getState( ).carData.models;
  carData.name = store.getState( ).carData.name;

  carData.models = carData.models.map (function ( value ) {
    value.isSelected = false;
    return value;
  })

  return {
    type: types.COMPLETE_TRANSACTION,
    carData
  }
}
