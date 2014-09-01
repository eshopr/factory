// 'use strict';
var uiController = angular.module('uiController', []);

uiController.controller('uiController', function(
    $resource,
    $scope, 
    $http,
    // ,
    $stateParams
    // RecipeFactory,
    // IngredientFactory
    ) { 
    $scope.debug = "js/listing/uiController";
        $scope.listingID = $stateParams.instanceID;
});
