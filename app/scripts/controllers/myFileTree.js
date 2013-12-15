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
        child.updateChildren(child, value);
      });
    }
  };

  this.getCheckedStatus = function() {
    var result;

    var areAllChecked = this.areAllChildrenChecked();
    if (areAllChecked) {
      result = 'allChecked';
    } else {
      var isAny = this.isAnyChildChecked(this.children);
      result = isAny ? 'someChecked' : 'unchecked';
    }
    return result;
  };

  this.isAnyChildChecked = function (nodeChildren) {
    var result = this.checked;
    if (nodeChildren) {
      angular.forEach(nodeChildren, function (child) {
        result = result || child.isAnyChildChecked(child.children, result);
      });
    }
    return result;
  };

  this.areAllChildrenChecked = function () {
    var result = this.checked;
    if (this.children) {
      var allChecked = true; // <-- 'angular.forEach' doesn't have a 'break' statement
      angular.forEach(this.children, function (child) {
        if (allChecked) {
          result = child.areAllChildrenChecked();
          if (!result) {
            allChecked = false; // <-- this is our 'break' condition
          }
        }
      });
    }
    return result;
  };
};

TreeNode.FOLDER = 'folder';
TreeNode.FILE = 'file';

angular.module('frontendApp')
  .controller('MyFileTreeCtrl', function ($scope) {

    var treeSmaller = new TreeNode('Root', TreeNode.FILE);

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

    var treeLarge = new TreeNode('Root', TreeNode.FOLDER, [
      new TreeNode('Folder 1', TreeNode.FOLDER, [
        new TreeNode('File 1.1', TreeNode.FILE),
        new TreeNode('File 1.2', TreeNode.FILE),
        new TreeNode('Folder 1.Foo',TreeNode.FOLDER, [
          new TreeNode('Some Folder', TreeNode.FOLDER, [
            new TreeNode('foo.txt', TreeNode.FILE),
            new TreeNode('bar.docx', TreeNode.FILE),
            new TreeNode('baz.pdf', TreeNode.FILE)
          ])
        ]),
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

    // swap the trees below so jshint doesn't complain:
    $scope.ignore = treeSmaller;
    $scope.ignore = treeSmall;
    $scope.ignore = tree;
    $scope.tree = treeLarge;
  });
