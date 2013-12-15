'use strict';

angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, $location) {
    $scope.loginUser = function () {
      $location.path('/myFileTree');
    };
  });
