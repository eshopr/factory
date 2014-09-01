// 'use strict';
var uiController = angular.module('uiController', []);

uiController.controller('uiController', function(
    $resource,
    $scope, 
    $http,
    $stateParams,
    ListingModel
    ) { 
    $scope.debug = "js/listing/uiController";

    $scope.listing;
    $scope.listingID = $stateParams.instanceID;

  function init() {
    ListingModel.showListing($scope.listingID).then(function(response) {
        $scope.listing = response.data;
    });
  }
  init();

});
  // $scope.createRecipe = function(){
  //   console.log($scope.items);
  //   $scope.formData.bom = $scope.items;
  //   console.log($scope.formData);
  //   RecipeFactory.insertRecipe($scope.formData).then(function(response) {

  //     console.log(response);
  //     $scope.items = [];
  //     $scope.formData = {}; // clear the form so our user is ready to enter another
  //     $scope.recipes = response.data;
  //   }); 
  // }

  // $scope.items = [];
  // $scope.addNew = function (){
  //   $scope.items.push({ active: "true" });
  //   console.log($scope.items);
  // };
  
  // $scope.submitOne = function (item){
  //   $scope.lastSubmit = angular.copy(item);
  // };
  
  // $scope.submitAll = function() {
  //   $scope.lastSubmit = angular.copy($scope.items);
  // }

  // $scope.showRecipes = function(id){
  //   RecipeFactory.showRecipe(id).then(function(response) {
  //     $scope.item = response.data;
  //   }); 
  // }
