'use strict';

var TreeNode = function(name, type, children) {

  this.name = name;
  this.type = type;
  this.children = children;
  this.open = true;
  this.checked = false;

  this.checkClicked = function(value) {
    this.checked = value;

    this.updateChildren(this, value);

  };

  this.updateChildren = function (node, value) {
    if (node.children) {
      angular.forEach(node.children, function (child) {
        child.checked = value;
        this.updateChildren(child, value);
      });
    }
  };



  this.isChecked = function () {
    //var doc = 'Currently, this method only returns boolean.TODO: We need 3 states (allChecked, noneChecked, someChecked';
    var result = false;
    result = this.checked;

    // result = isAnyChildChecked(this.children, this.checked);
    result = this.areAllChildrenChecked(this.children, this.checked);

    return result;
  };

  this.isAnyChildChecked = function (currentTreeNodeChildren, isCurrentTreeNodeChecked) {
    var result = isCurrentTreeNodeChecked;
    if (currentTreeNodeChildren) {
      angular.forEach(currentTreeNodeChildren, function (child) {
        result = result || child.isChecked();
        // result = result || child.isAnyChildChecked(child.children, result);
      });
    }
    return result;
  };

  this.areAllChildrenChecked = function (currentTreeNodeChildren, isCurrentTreeNodeChecked) {
    var result = isCurrentTreeNodeChecked;

    if (currentTreeNodeChildren) { /* TODO recursion */ }
    return result;
  };
};

TreeNode.FOLDER = 'folder';
TreeNode.FILE = 'file';



angular.module('frontendApp')
.controller('FileTreeCtrl', function ($scope) {

  $scope.dummy = 'Hi from Angular FileTreeController!';

  var treeSmall = new TreeNode('Root', TreeNode.FOLDER, [
    new TreeNode('Folder 1', TreeNode.FOLDER, [
      new TreeNode('File 1.1', TreeNode.FILE),
      new TreeNode('File 1.2', TreeNode.FILE),
      new TreeNode('File 1.3', TreeNode.FILE)
    ])
  ]);

  var tree = new TreeNode('Root', TreeNode.FOLDER, [
    new TreeNode('Folder 1', TreeNode.FOLDER, [
      new TreeNode('File 1.1', TreeNode.FILE),
      new TreeNode('File 1.2', TreeNode.FILE),
      new TreeNode('File 1.3', TreeNode.FILE),
    ]),
    new TreeNode('Folder 2', TreeNode.FOLDER, [
      new TreeNode('File 2.1', TreeNode.FILE),
      new TreeNode('File 2.2', TreeNode.FILE),
      new TreeNode('File 2.3', TreeNode.FILE)
    ]),
    new TreeNode('Folder 3', TreeNode.FOLDER, [
      new TreeNode('File 3.1', TreeNode.FILE),
      new TreeNode('File 3.2', TreeNode.FILE),
      new TreeNode('File 3.3', TreeNode.FILE)
    ]),
    new TreeNode('File 0.1', TreeNode.FILE),
    new TreeNode('File 0.2', TreeNode.FILE),
    new TreeNode('File 0.3', TreeNode.FILE)
  ]);

  $scope.ignore = tree;
  $scope.tree = treeSmall;
});

