'use strict';

var publicBlogController = angular.module('publicBlogController',[]);

publicBlogController.controller('publicBlogController',
  function($scope){
    $scope.debug = 'js/blog/public/publicBlogController';
    $scope.posts = [
    	{
    	"title" : "What else is there to do this evening",
    	"slug"  : "what-else",
    	"body"  : "<p>Ipsum dolor sit amet, consectetur adipisicing elit.</p>"
    	},
    	{
    	"title" : "Do Ecological Skyscrapers Ever Get Built",
    	"slug"  : "do-eco",
    	"body"  : "<p>Ipsum dolor sit amet, consectetur adipisicing elit.</p>"	
    	}
    ]
});

var sidebarBlogController = angular.module('sidebarBlogController',[]);

sidebarBlogController.controller('sidebarBlogController',
  function($scope){
    $scope.debug = 'js/blog/public/sidebarBlogController';
});

