var checkoutController = angular.module('checkoutController',[]);

checkoutController.controller('checkoutController',
  function(
    $scope,
    $rootScope,
    $cookieStore,
    localStorageService
  ){
    $scope.debug = 'js/blog/public/checkoutController';
    $scope.books = ['book1','book2']
    $scope.cook = localStorageService.get('downloads');
    $scope.downloads = [];

    // Example
  // To add to local storage

  console.log(localStorageService.get('localStorageKey'));
  console.log();
  // Read that value back
  // var value = localStorageService.get('localStorageKey');
  // To remove a local storage
  // localStorageService.remove('localStorageKey');
  // Removes all local storage
  // localStorageService.clearAll();
  // You can also play with cookies the same way
  // localStorageService.cookie.set('localStorageKey','I am a cookie value now');

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
        var itmNo = 1;
        console.log('beforeCheckout');
        console.log(data);
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
        // $scope.downloads = outgoing;
        // data.name = "ABC-123456789";
        // alert(data.invoiceNumber);
        // ipCookie('book', data.invoiceNumber, { expires: 21 });
        localStorageService.set('downloads',outgoing);
        //localStorageService.set('localStorageKey','Add this!');
        // console.log($scope.downloads);
        return false;
    });


    // simple callback example
    // .bind( 'beforeCheckout' , function( data ){
    //     data.invoiceNumber = "ABC-123456789";
    // });


});
