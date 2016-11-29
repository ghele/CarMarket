import angular from 'angular';
import uibootstrap from 'angular-ui-bootstrap';
import {store} from './reducers/reducer';
import {CarMarketService} from './services/service';
import * as types from './actions/actionTypes';
import { receiveCarMarket,
         filterAfterSearchField,
         filterAfterBrandDropdown,
         filterAfterModelDropdown,
         addRemoveCartItem,
         completeTransaction } from './actions/actionCreators';

const carMarketApp = angular.module( 'carMarketApp', [ uibootstrap ] )

carMarketApp.controller( 'CarMarketCtrl', ( $scope, CarMarketFactory, store, $uibModal, $log) => {
    $scope.model = { }

    store.subscribe( ( ) => {
        Object.assign($scope.model, { carStore: store.getState( ) } )
    } )

    $scope.getCars = ( ) => {
        CarMarketFactory.getMarketCars( )
            .then( carData => store.dispatch( receiveCarMarket( carData ) ) )
    }
    $scope.getCars();

    $scope.filterAfterSearchField = ( searchText ) => {
        store.dispatch( filterAfterSearchField( searchText ) )
    }

    $scope.filterAfterBrandDropdown = ( brandDropdown ) => {
        store.dispatch( filterAfterBrandDropdown( brandDropdown ) )
    }

    $scope.filterAfterModelDropdown = ( filterDropdown ) => {
        store.dispatch( filterAfterModelDropdown( filterDropdown ) )
    }

    $scope.addRemoveCartItem = ( addRemoveItem ) => {
        store.dispatch( addRemoveCartItem( addRemoveItem ) )
    }

    $scope.openModal = function(size) {
        var modalInstance = $uibModal.open({
            animation: "true",
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            size: size,
            resolve: {
                cart: function () {
                    return store.cartData;
                }
            }
        })
        modalInstance.result.then(function (data) {
          return;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());

        });
    }
} )

carMarketApp.controller( 'ModalInstanceCtrl', ( $scope, $window, $uibModalInstance, $log, cart) => {
    $scope.cart = cart;

    $scope.completeTransaction = ( ) => {
        $uibModalInstance.close();
        store.dispatch( completeTransaction( ) )
    }

    $scope.validateName = function(val){
        var patt = /^(?!.*([A-Za-z0-9])\1{1})[A-Za-z0-9]{5,}$/;
        return patt.test(val);
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

carMarketApp.value( 'store', store )

carMarketApp.factory( 'CarMarketFactory', $http => {
    return CarMarketService( ( method, url ) => {
        return $http[ method.toLowerCase( ) ]( url )
            .then( response => response.data )
    } )
} )
