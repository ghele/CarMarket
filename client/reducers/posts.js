import * as types from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  lastUpdated: 0,
  items: { }
}

export function posts( state = initialState, action ) {
  switch (action.type) {

    case types.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case types.RECEIVE_POSTS:
      console.log(state);
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })

    default:
      return state
  }
}
