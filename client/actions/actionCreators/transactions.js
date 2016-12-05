import {TRANSACTIONS} from '../actionTypes';

import store from '../../store';

// Empty/full star
export function toggleVehicle( vehicleId ) {
  const { isFetching, lastUpdated } = store.getState( ).posts;
  const names = store.getState( ).posts.items.name;
  const { make, name, isSelected } = store.getState( ).posts.items.models[vehicleId];

  return {
    type: TRANSACTIONS.TOGGLE_VEHICLE,
    isFetching,
    lastUpdated,
    names,
    vehicleId,
    name,
    make,
    isSelected
  }
}

// Add/Remove item to/from cart based on the isSelected flag
export function toggleCart( vehicleId ) {
  const { isFetching, lastUpdated } = store.getState( ).posts;
  const names = store.getState( ).posts.items.name;
  const { make, name, isSelected } = store.getState( ).posts.items.models[vehicleId];

  return {
    type: TRANSACTIONS.TOGGLE_CART,
    names
  }
}

// Submit the modal form
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
    type: TRANSACTIONS.COMPLETE_TRANSACTION,
    isFetching,
    lastUpdated,
    items
  }
}