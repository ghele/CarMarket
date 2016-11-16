// TO-DO: add angular ui bootstrap to package.json, add axios
import angular from 'angular';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk'
import uibootstrap from 'angular-ui-bootstrap';
import store from './store.js';

ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));

var carMarketApp = angular.module('carMarketApp', [uibootstrap]);

carMarketApp.factory("CarMarketService", ['$http', function($http) {
    var marketData = {};
    marketData.models = [];
    marketData.name = [];
    var getMarketData = function(){
        return $http.get("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=e6jd7d4rx7qx64r5dskzwdwc")
            .then(function(response) {
                var id = 0;
                response.data.makes.forEach(function(entry) {
                    marketData.name.push(entry.name);
                    entry.models.forEach(function(model) {
                        marketData.models.push({
                            id: id++,
                            name: model.name,
                            make: entry.name,
                            isSelected: false
                        });
                    });
                })
                return marketData;
            })
    }
    return {
        getMarketData: getMarketData
    }
}]);

carMarketApp.controller("StoreController", ["CarMarketService", "$uibModal", "$log", function(CarMarketService, $uibModal, $log, $document) {
    var vm = this;

    CarMarketService.getMarketData().then(function(marketData) {
        vm.cars = marketData;
        vm.cart = [];
    })

    vm.addToCart = function(carId, carName, carModel) {
      var pickedModel = vm.cars.models[carId];
      console.log("drvewrdvfe", vm.cars.models[carId].isSelected);
      if(pickedModel.isSelected === false) {
        vm.cart.push({ id: carId, name: carName, model: carModel });
        vm.itemsInCart = vm.cart.length;
        pickedModel.isSelected = true;
          console.log("add - items", vm.cart);
      } else { vm.removeCartItem(carId) }
      console.log("drvewrdvfe", vm.cars.models[carId].isSelected);
    }

    vm.removeCartItem = function(itemId) {
        console.log("subtract - items", vm.cart);
        var pickedModel = vm.cars.models[itemId];
        pickedModel.isSelected = false;
        vm.cart = vm.cart.filter(function(obj) {
            console.log("subtract - items", vm.cart);
            return obj.id !== itemId;
        });
        vm.itemsInCart = vm.cart.length;
    }

    vm.openModal = function(size) {
        var modalInstance = $uibModal.open({
            animation: "true",
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            size: size,
            resolve: {
                itemsInCart: function(){
                    return vm.itemsInCart;
                },
                cart: function () {
                    return  vm.cart;
                }
            }
        })
        modalInstance.result.then(function (data) {
            vm.itemsInCart = null;
            vm.cars.models.forEach(function(item) {
                if(item.isSelected == true) {
                    item.isSelected = false;
                }
            })
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());

        });
    }
}]);

carMarketApp.controller('ModalInstanceCtrl', ['$window', '$uibModalInstance', '$log', 'cart', function ($window, $uibModalInstance, $log, cart) {

    var vm = this;
    vm.cart = cart;
    vm.itemsInCart = vm.cart.length;

    vm.storeOrder = function () {

        console.log("-------------------",vm.cart);
        console.log("----------------", vm.user);

        vm.finalOrder = {
            customerName: vm.user.name,
            customerEmail: vm.user.mail,
            customerReview: vm.user.review,
            orderDescription: vm.cart
        };

        if (vm.user.name in $window.localStorage){
            console.log("Please choose another username!");
        } else {
            $window.localStorage.setItem(vm.user.name, vm.finalOrder)
            // $window.location.reload();
        }

        $uibModalInstance.close();


    };

    vm.validateName = function(val){
        var patt = /^(?!.*([A-Za-z0-9])\1{1})[A-Za-z0-9]{5,}$/;
        return patt.test(val);
    }

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);
