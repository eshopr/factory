// 'use strict';
var graphsController = angular.module('graphsController', []);

graphsController.controller('graphsController', function($scope){
	$scope.tfo = 'string';
	$scope.graphOpts = {
    	lines: { show: true },
    	colors:[ '#0055CC', '#078600', '#6e0069', '#ff8900' ],
	};

	$scope.graphHeight = 400;

	$scope.graphData = [[0, 3], [4, 8], [8, 5], [9, 13]];
	alert('tfo');
	$(placeholder).plot([[[0, 3], [4, 8], [8, 5], [9, 13]]]);
});

eshoprShop.directive( 'chart', function() {
  var htmlTemplate = '<div></div>';
  // alert(htmlTemplate);

  return {
    restrict: 'E',
    template: htmlTemplate,
    replace: true,
    scope: {
      graphData: '=graphdata',
      graphOpts: '=graphopts',
      graphHeight: '=graphheight',
    },
    link: function( scope, element, attrs ) {
    	console.log(scope.graphHeight);
    	console.log(scope.graphOpts);
    	console.log(scope.graphData);
      // scope.$watch( 'graphData', function( graphData ) {
        // if( typeof scope.graphData !== 'undefined' && scope.graphData.length > 0 ) {
          element.plot([[[0, 3], [4, 8], [8, 5], [9, 13]]]);
        // }
      // });
    },
  };
}); // thanks to http://josenidhin.blogspot.ro/2013/07/a-simple-graph-directive-in-angularjs.html?view=timeslide