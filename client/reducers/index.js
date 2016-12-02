import * as types from '../actions/actionTypes'

const initialState = {
  posts: {
    isFetching: false,
    lastUpdated: 0,
    items: { }
  },
  search: {
    searchText: '',
    brandDropdown: '',
    modelDropdown: ''
  },
  filteredVehicles: [ ]
}

export function rootReducer( state = initialState, action ) {
  switch (action.type) {

    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        posts: {
          isFetching: true,
          lastUpdated: 0,
          items: { }
        },
        filteredVehicles: [ ]
      } )

    case types.RECEIVE_POSTS:
      return Object.assign({}, state, {
        posts: {
          isFetching: false,
          lastUpdated: action.receivedAt,
          items: action.posts
        },
        filteredVehicles: action.posts.models
      } )

    case types.FILTER_AFTER_SEARCH_FIELD:
      return Object.assign({}, state, {
        search: {
          searchText: action.searchText,
          brandDropdown: '',
          modelDropdown: ''
        },
        filteredVehicles: action.filteredVehicles
      } )

    case types.FILTER_AFTER_BRAND_DROPDOWN:
      return Object.assign({}, state, {
        search: {
          searchText: '',
          brandDropdown: action.brandDropdown,
          modelDropdown: ''
        },
        filteredVehicles: action.filteredVehicles
      } )

    case types.FILTER_AFTER_MODEL_DROPDOWN:
      return Object.assign({}, state, {
        search: {
          searchText: '',
          brandDropdown: action.filterDropdown.brandName,
          modelDropdown: action.filterDropdown.modelName
        },
        filteredVehicles: action.filteredVehicles
      } )

    default:
      return state
  }
}

export default rootReducer;
