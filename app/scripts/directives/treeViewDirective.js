'use strict';

angular.module('tree', [])
.directive('node', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      node: '=value'
    },
    templateUrl: 'views/treeViewTemplate.html'
  };
})
.directive('nodeList', function ($compile) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      nodes: '=value'
    },
    template: '<div></div>',
    link: function (scope, element) {
      if (angular.isArray(scope.nodes)) {
        var nodeList = jQuery('<node ng-repeat="node in nodes" value="node"></node>');
        element.append(nodeList);
        $compile(nodeList)(scope);
      }
    }
  };
});
