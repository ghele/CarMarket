import { POSTS, SEARCH, TRANSACTIONS } from '../actions/actionTypes';

// Initial state
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
  filteredVehicles: [ ],
  cart: [ ]
}

// Root reducer
export function rootReducer( state = initialState, action ) {
  const { receivedAt,
          posts,
          items,
          names,
          vehicleId,
          isFetching,
          lastUpdated,
          make,
          name,
          isSelected,
          searchText,
          brandDropdown,
          filteredVehicles } = action;

  switch (action.type) {

    // Posts
    case POSTS.REQUEST_POSTS:
      return { ...state,
        posts: {
          isFetching: true,
          lastUpdated: 0,
          items: { }
        },
        filteredVehicles: [ ],
        cart: [ ]
      }

    case POSTS.RECEIVE_POSTS:
      const {models} = action.posts;

      return { ...state,
        posts: {
          isFetching: false,
          lastUpdated: receivedAt,
          items: posts
        },
        filteredVehicles: models
      }

    // Search
    case SEARCH.FILTER_AFTER_SEARCH_FIELD:
      return { ...state,
        search: {
          searchText,
          brandDropdown: '',
          modelDropdown: ''
        },
        filteredVehicles
      }

    case SEARCH.FILTER_AFTER_BRAND_DROPDOWN:
      return { ...state,
        search: {
          searchText: '',
          brandDropdown,
          modelDropdown: ''
        },
        filteredVehicles
      }

    case SEARCH.FILTER_AFTER_MODEL_DROPDOWN:
      const { brandName, modelName } = action.filterDropdown;

      return { ...state,
        search: {
          searchText: '',
          brandDropdown: brandName,
          modelDropdown: modelName
        },
        filteredVehicles
      }

    // Transactions
    case TRANSACTIONS.TOGGLE_VEHICLE:
      return { ...state,
        posts: {
          isFetching,
          items: {
            models:
              state.posts.items.models.slice( 0, vehicleId )
              .concat( [ {
                id: vehicleId,
                make,
                name,
                isSelected: !isSelected
              } ] )
              .concat( state.posts.items.models.slice( vehicleId + 1 ) ),
            name: names
          },
          lastUpdated
        }
      }


    case TRANSACTIONS.TOGGLE_CART:
      return { ...state,
        cart: state.posts.items.models.filter( ( value ) => { return value.isSelected === true } )
      }

    case TRANSACTIONS.COMPLETE_TRANSACTION:
      return { ...state,
        posts: {
          isFetching,
          items,
          lastUpdated
        },
        cart: [ ]
      }

    default:
      return state
  }
}

export default rootReducer;
