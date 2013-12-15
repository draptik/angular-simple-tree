'use strict';

describe('Controller: MyfiletreeCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var MyfiletreeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyfiletreeCtrl = $controller('MyfiletreeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
