var weatherDirective = angular.module('weatherDirective', []);

weatherDirective.directive( 'weather', function() {
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

// $(document).ready(function() {
//   $.simpleWeather({
//     location: 'Austin, TX',
//     woeid: '',
//     unit: 'f',
//     success: function(weather) {
//       html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
//       $("#weather").html(html);
//     },
//     error: function(error) {
//       $("#weather").html('<p>'+error+'</p>');
//     }
//   });
// });