import {createStore} from 'redux';
import * as types from '../actions/actionTypes';

const initialState = {
  carData: { },
  filters: {
    searchText: "",
    brandDropdown: "",
    modelDropdown: ""
  },
  filteredData: { },
  cartData: { }
}

const store = createStore( ( state = initialState, action ) => {
    switch( action.type ) {
        case types.RECEIVE_CAR_MARKET:
            return Object.assign(state, { carData: action.carData } );
            // return Object.assign(state, { filters: { searchText: action.name, brandDropdown: "", modelDropdown: "" } }, { carData: action.carData } );
        case types.FILTER_AFTER_SEARCH_FIELD:
            return Object.assign(state, { carData: action.carData } );
        default:
            return state
    }
} )

export {store};
