'use strict';

var publicBlogController = angular.module('publicBlogController',[]);

publicBlogController.controller('publicBlogController',
  function($scope){
    $scope.debug = 'js/blog/public/publicBlogController';
});

var sidebarBlogController = angular.module('sidebarBlogController',[]);

sidebarBlogController.controller('sidebarBlogController',
  function($scope){
    $scope.debug = 'js/blog/public/sidebarBlogController';
});