import angular from 'angular';

// Declare Car Market Module
var carMarketApp = angular.module('carMarketApp', []);

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

carMarketApp.controller("StoreController", ["CarMarketService", function(CarMarketService) {
    var vm = this;

    CarMarketService.getMarketData().then(function(marketData) {
        vm.cars = marketData;
        vm.cart = [];
        console.log(vm.cars);
    })

    vm.addToCart = function(carId, carName, carModel) {
      var pickedModel = vm.cars.models[carId];
      console.log("drvewrdvfe", vm.cars.models[carId].isSelected);


      if(pickedModel.isSelected === false) {
        vm.cart.push({ id: carId, name: carName, model: carModel });
        pickedModel.isSelected = true;
      } else { return; }

      console.log("drvewrdvfe", vm.cars.models[carId].isSelected);

      console.log("Cars models -", vm.cars.models);
      console.log("Cart -", vm.cart);
      console.log("Cars -", vm.cars);
    }
}]);
