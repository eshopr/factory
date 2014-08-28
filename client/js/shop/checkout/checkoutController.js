var checkoutController = angular.module('checkoutController',[]);

checkoutController.controller('checkoutController',
  function($scope){
    $scope.debug = 'js/blog/public/checkoutController';

    simpleCart({
        checkout: {
          type: "PayPal",
          email: "binarygeometry@gmail.com",
          currency: "EUR" // set the currency to pounds sterling
        }
    });
});
