var weatherDirective = angular.module('weatherDirective', []);

weatherDirective.directive( 'chart', function() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="show-weather">something',
      // scope:{tstvalue: "=tstvalue"}
      link: function(scope, elem, attrs) {
        console.log(scope);
      }
    }

  });