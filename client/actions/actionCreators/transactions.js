import * as types from '../actionTypes';

import store from '../../store';

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

export function toggleCart( vehicleId ) {
  const { isFetching, lastUpdated } = store.getState( ).posts;
  const names = store.getState( ).posts.items.name;
  const { make, name, isSelected } = store.getState( ).posts.items.models[vehicleId];

  return {
    type: types.TOGGLE_CART,
    names
  }
}

export function completeTransaction ( ) {
  const { isFetching, lastUpdated } = store.getState( ).posts;
  let { models, name } = store.getState( ).posts.items;

  models = models.map (function ( item ) {
    item.isSelected = false;
    return item;
  });

  let items = {
    name,
    models
  }

  return {
    type: types.COMPLETE_TRANSACTION,
    isFetching,
    lastUpdated,
    items
  }
}
