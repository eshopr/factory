// 'use strict';
var listingController = angular.module('listingController', []);

listingController.controller('listingController', function(
    $resource,
    $scope, 
    $http,
    // ,
    $stateParams
    // RecipeFactory,
    // IngredientFactory
    ) { 

    $scope.listings = [
        {
            "_id": "12345",
            "name": "Hill Croft",
            "email": "billy@hillcroft.com",
            "beds-available": 2,
            "beds-required": 7,
            "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
        },
                {
            "_id": "12346",
            "name": "Meadow Croft",
            "email": "billy@hillcroft.com",
            "beds-available": 2,
            "beds-required": 4,
            "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
        },
                {
            "_id": "12347",
            "name": "Mountain Croft",
            "email": "ingrid@hillcroft.com",
            "beds-available": 4,
            "beds-required": 2,
            "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
        },
        {
            "_id": "12348",
            "name": "Wooland Croft",
            "email": "peter@hillcroft.com",
            "beds-available": 3,
            "beds-required": 1,
            "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
        },
        {
            "_id": "12349",
            "name": "Urban Croft",
            "email": "sally@urbancroft.com",
            "beds-available": 0,
            "beds-required": 2,
            "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
        },
    ]

    $scope.debug = 'js/listing/listingController';

});


  
  // function init() {
  //   IngredientFactory.getIngredients().then(function(response) {
  //     alert('boom');
  //       var plot = $.plot("#placeholder", $scope.graphData).data("plot");
  //                           // alert(plot);
  //       console.log(response)
  //       $scope.ingredients = response.data;
  //   });
  //   RecipeFactory.getRecipes().then(function(response) {
  //     console.log(response)
  //       $scope.recipes = response.data;
  //   });
  // }
  // init();

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




