import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartManipulation from './reducers/reducers';
import {ajaxCallBegin, checkCarModel, checkOutCarModel, loadInitialState} from './actions/actionCreators';

let store = createStore(cartManipulation, applyMiddleware(thunk));

console.log( loadInitialState );

store.dispatch(loadInitialState());
store.subscribe( () => console.log("state", store.getState() ) )
// console.log("wpeoufh9oeh", store.getState());
