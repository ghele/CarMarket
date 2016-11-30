import * as types from '../actions/actionTypes'

const initialState = {
   name: ""
}

export function posts( state = initialState, action ) {
  switch (action.type) {

    case "MAIN_CASE":
      return Object.assign({}, state, {
        name: "Raoul"
      })
    default:
      return state
  }
}
