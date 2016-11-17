import angular from 'angular';
import React from 'react';
import Redux from 'redux';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartManipulation from './reducers/reducers';
import {ajaxCallBegin, checkCarModel, checkOutCarModel, loadInitialState} from './actions/actionCreators';

import uibootstrap from 'angular-ui-bootstrap';
import store from './store.js';

angular.module('carMarketApp', []);

angular.module('carMarketApp').service('Redux', function (){
  return Redux;
});

angular.module('carMarketApp').service('cartManipulation', function () {
  return function(state = {}, action) {
    switch (action.type) {
      case types.AJAX_CALL_SUCCESS:
        // call the API
        console.log('===',state);
        console.log('------', action);
        return Object.assign({}, state, action.marketData);
        // return [ ...action.marketData ];
      case types.CHECK_CAR_MODEL:
        // change the isSelected flag of the selected car to true
        return state + 1;
      case types.CHECKOUT_CAR_MODEL:
        // change the isSelected flag of the selected car to false
        return state - 1;
      default:
        return state
      }
  }
});

angular.module('carMarketApp').service('applicationStore', ['Redux', 'listReducer', function (Redux, listReducer) {
  var store =  Redux.createStore(cartManipulation, applyMiddleware(thunk));
  console.log( loadInitialState );
  store.dispatch(loadInitialState());
  store.subscribe( () => console.log("state", store.getState() ) );
  return store;
}]);
