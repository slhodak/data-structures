var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree = _.extend(newTree, treeMethods);
  newTree.parent = null;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  node.parent = this;
  this.children.push(node);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++ ) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;

};
