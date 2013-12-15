'use strict';

angular.module('frontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'tree'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/myFileTree.html',
        controller: 'MyFileTreeCtrl'
      })
      .when('/myFileTree', {
        templateUrl: 'views/myFileTree.html',
        controller: 'MyFileTreeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
