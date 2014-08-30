var checkoutController = angular.module('checkoutController',[]);

checkoutController.controller('checkoutController',
  function(
    $scope,
    $rootScope,
    $cookieStore
  ){
    $scope.debug = 'js/blog/public/checkoutController';
    $scope.books = ['book1','book2']
    $scope.cook = $cookieStore.get('downloads');
    $scope.downloads = [];
    // $scope.cook = $cookieStore.get('myFavourite');

    $scope.bump = function () {
        // var lastVal = $cookieStore.get('lastValue');

        $cookieStore.put('books',$scope.books);
    }

    simpleCart({
        checkout: {
          type: "PayPal",
          email: "eshoprworkshop@gmail.com",
          currency: "GBP" // set the currency 
        }
    });
    simpleCart.bind( 'beforeCheckout' , function( data ){
        // console.log(data);
        var outgoing = []; // create object to hold array of downloadable purchases
        var dt = data;
        var itmNo = 1
        for (key in dt) {
          var ref = 'item_name_'+itmNo; // This our key, it is used against a dictionary
          var obj = dt[ref];
          var value = dt[key]; // this the current value of our iterated key value pair object
          // console.log('ref: '+ref);
          // console.log('foo: '+value);
          // console.log('obj: '+obj);
          // console.log('dsf'+dt[ref]);
          if(key === ref) {
            console.log(value);
            outgoing.push(value);
            itmNo++;
          }
        }
        $scope.downloads = outgoing;
        data.name = "ABC-123456789";
        // alert(data.invoiceNumber);
        // ipCookie('book', data.invoiceNumber, { expires: 21 });
        $cookieStore.put('downloads',$scope.downloads);
        console.log($scope.downloads);
        return false;
    });


    // simple callback example
    // .bind( 'beforeCheckout' , function( data ){
    //     data.invoiceNumber = "ABC-123456789";
    // });


});
