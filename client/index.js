import angular from 'angular';
import {store} from './reducers/reducer';
import {CarMarketService} from './services/service';
import * as types from './actions/actionTypes';
import { receiveCarMarket, filterAfterSearchField } from './actions/actionCreators';

console.log(types.RECEIVE_CAR_MARKET);

// var options = {
//   keys: ['makes', 'name']
// }
// var fuse = new Fuse(myArr, options)
//
// fuse.search('Hum')

const carMarketApp = angular.module( 'carMarketApp', [ ] )

carMarketApp.controller( 'CarMarketCtrl', ( $scope, $timeout, CarMarketFactory, store ) => {
    $scope.model = { }

    store.subscribe( ( ) => {
        Object.assign( $scope.model, { carStore: store.getState( ) } )
        console.log("GET_STATE - INDEX", store.getState( ));
    } )

    $scope.getCars = ( ) => {
        CarMarketFactory.getMarketCars( )
            .then( carData => store.dispatch( receiveCarMarket( carData ) ) )
    }

    $scope.filterAfterSearchField = ( searchText ) => {
        store.dispatch( filterAfterSearchField( searchText ) )
    }

} )

carMarketApp.value( 'store', store )

carMarketApp.factory( 'CarMarketFactory', $http => {
    return CarMarketService( ( method, url ) => {
        return $http[ method.toLowerCase( ) ]( url )
            .then( response => response.data )
    } )
} )
