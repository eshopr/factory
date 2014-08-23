// 'use strict';
var graphsController = angular.module('graphsController', []);

graphsController.controller('graphsController', function($scope){
	$scope.tfo = 'string';
	$scope.graphOpts = {
    	lines: { show: true },
    	colors:[ '#0055CC', '#078600', '#6e0069', '#ff8900' ],
	};

  $(function () {

  });

	$scope.graphHeight = 400;

	$scope.graphData = [[0, 3], [4, 8], [8, 5], [9, 13]];

})

var graphsDirective = angular.module('graphsDirective', []);
graphsDirective.directive( 'chart', function() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="plotarea">something',
      link: function(scope, elem, attrs) {
        console.log(scope);
        console.log(elem);
        var data = [ [[2003, 10882],
          [2002, 10383],
          [2001, 10020],
          [2000, 9762],
          [1999, 9213],
          [1998, 8720]] ];
       
      // var plotarea = $(".plotarea");
      
      // plotarea.css("width", "500px");
      $.plot(elem, data );

        // elem.bind('click', function() {
        //   elem.css('background-color', 'white');
        //   scope.$apply(function() {
        //     scope.color = "white";
        //   });
        // });
        // elem.bind('mouseover', function() {
        //   elem.css('cursor', 'pointer');
        // });
      }
    }
  });
  // return {
  //   restrict: 'E',
  //   template: htmlTemplate,
  //   replace: true,
  //   scope: {
  //     graphData: '=graphdata',
  //     // graphOpts: '=graphopts',
  //     graphHeight: '=graphheight',
  //   },
  //   link: function( scope, element, attrs ) {
  //   	console.log(graphHeight);
  //   	// console.log(graphOpts);
  //   	console.log(graphData);
  //     // scope.$watch( 'graphData', function( graphData ) {
  //       // if( typeof scope.graphData !== 'undefined' && scope.graphData.length > 0 ) {
  //         // element.plot([[[0, 3], [4, 8], [8, 5], [9, 13]]]);
  //       // }
  //     // });
  //   },
  // };
// }); // thanks to http://josenidhin.blogspot.ro/2013/07/a-simple-graph-directive-in-angularjs.html?view=timeslide