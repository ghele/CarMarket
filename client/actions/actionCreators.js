import {store} from '../reducers/reducer';

import * as types from './actionTypes';

export function receiveCarMarket( carData ) {
  return {
    type: types.RECEIVE_CAR_MARKET,
    carData
  }
}

export function filterAfterSearchField( searchText ) {
  const models = store.getState( ).carData.models;
  // console.log("GET_STATE - FILTER_AFTER_SEARCH_FIELD", store.getState( ).carData.models);
  // console.log("SEARC_TEXT", searchText);
  let filteredData = [];
  const options = {
    threshold: 0.3,
    keys: ['name', 'make']
  }
  const fuse = new Fuse(models, options);

  if ( searchText.length != 0 ) {
    filteredData = fuse.search(searchText);
  } else {
    filteredData = models
  }
  // console.log("FUSE_SEARCH", fuse.search(searchText));
  return {
    type: types.FILTER_AFTER_SEARCH_FIELD,
    searchText,
    filteredData
  }
}

export function filterAfterBrandDropdown( brandDropdown ) {
  const models = store.getState( ).carData.models;
  let filteredData = []

  if ( brandDropdown.length != 0 ) {
    filteredData = models.filter( ( value ) => { return value.make === brandDropdown } ) ;
  } else {
    filteredData = models
  }
  console.log("brandDropdown", filteredData);
  return {
    type: types.FILTER_AFTER_BRAND_DROPDOWN,
    brandDropdown,
    filteredData
  }
}

export function filterAfterModelDropdown( filterDropdown ) {
  const models = store.getState( ).carData.models;
  let filteredData = []

  if ( filterDropdown.modelDropdown.length != 0 ) {
    filteredData = models.filter( ( value ) => { return value.name === filterDropdown.modelDropdown } ) ;
  } else {
    filteredData = models.filter( ( value ) => { return value.make === filterDropdown.brandDropdown } ) ;
  }
  console.log("modelDropdown", filteredData);
  return {
    type: types.FILTER_AFTER_MODEL_DROPDOWN,
    filterDropdown,
    filteredData
  }
}

export function addRemoveCartItem( addRemoveItem ) {
  let cartData = [ ];
  const carData = store.getState( ).carData;
  const filteredData = store.getState( ).filteredData;

  Object.assign(carData, carData.models[ addRemoveItem.carId ].isSelected = !carData.models[ addRemoveItem.carId ].isSelected );
  if( carData.models[ addRemoveItem.carId ].isSelected === true ) {
    cartData.push(filteredData.filter( ( value ) => { return value.name === addRemoveItem.itemModel } ) )
    console.log("CART_DATA",cartData);
    // return cartData;
    console.log("BEFORE", filteredData);
  } else {
    filteredData.filter( ( value ) => { return value.name !== addRemoveItem.itemModel } )
    console.log("AFTER", filteredData);
  }
  console.log("CARDATA ", carData);
  console.log("CARTDATA ", cartData);
  console.log("FILTERED_DATA", filteredData);

  return {
    type: types.ADD_REMOVE_CART_ITEM,
    carData,
    filteredData,
    cartData
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
