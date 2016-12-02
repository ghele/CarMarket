// import * as types from '../actions/actionTypes'
//
// const initialState = {
//   searchText: '',
//   brandDropdown: '',
//   modelDropdown: ''
// }
//
// export function search( state = initialState, action ) {
//   switch (action.type) {
//
//     case types.FILTER_AFTER_SEARCH_FIELD:
//       return Object.assign({}, state, {
//         searchText: action.searchText,
//         brandDropdown: '',
//         modelDropdown: ''
//       })
//
//     case types.FILTER_AFTER_BRAND_DROPDOWN:
//       return Object.assign({}, state, {
//         searchText: '',
//         brandDropdown: action.brandDropdown,
//         modelDropdown: ''
//       })
//
//     case types.FILTER_AFTER_MODEL_DROPDOWN:
//       return Object.assign({}, state, {
//         searchText: '',
//         brandDropdown: action.filterDropdown.brandDropdown,
//         modelDropdown: action.filterDropdown.modelDropdown
//       })
//
//     default:
//       return state
//   }
// }
