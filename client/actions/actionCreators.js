import * as types from './actionTypes';
import axios from 'axios';

export function ajaxCallBegin() {
  return {
    type: types.AJAX_CALL_BEGIN
  }
}

export function checkCarModel() {
 return {
   type: types.CHECK_CAR_MODEL
 }
}

export function checkOutCarModel() {
 return {
   type: types.CHECKOUT_CAR_MODEL
 }
}

export function loadInitialStateSuccess(marketData) {
  return {
    type: types.AJAX_CALL_SUCCESS,
    marketData
  }
}

export function loadInitialState() {
  return function (dispatch) {
    return axios.get('http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc')
        .then(function (response) {
          console.log(loadInitialStateSuccess(response.data.makes));
          var marketData = {}, id=0;
          marketData.models = [];
          marketData.name = [];
          response.data.makes.forEach(function(entry) {
              marketData.name.push(entry.name);
              entry.models.forEach(function(model) {
                  marketData.models.push({
                      id: id++,
                      name: model.name,
                      make: entry.name,
                      isSelected: false
                  });
              });
          })
          dispatch(loadInitialStateSuccess(marketData));
      })
        .catch(function (error) {
          console.log(error);
      });
    }
}
