var checkoutController = angular.module('checkoutController',[]);

checkoutController.controller('checkoutController',
  function($scope){
    $scope.debug = 'js/blog/public/checkoutController';

    simpleCart({
        checkout: {
          type: "PayPal",
          email: "binarygeometry@gmail.com",
          currency: "GBP" // set the currency 
        }
    })// simple callback example
;    // .bind( 'beforeCheckout' , function( data ){
    //     data.invoiceNumber = "ABC-123456789";
    // });


});
