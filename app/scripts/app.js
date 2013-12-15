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
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/myFileTree', {
        templateUrl: 'views/myFileTree.html',
        controller: 'MyFileTreeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
