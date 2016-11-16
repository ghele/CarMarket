import * as types from '../actions/actionTypes';


function cartManipulation(state = {}, action) {
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
// loadInitialState();

export default cartManipulation;
