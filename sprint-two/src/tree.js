var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree = _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
/*
create a new tree variable with the value
add the new tree to the calling object children
*/
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
/*
check if current nodes value is equal to target
  if true return true
iterate through the children
  apply recursion for each child
  check to see if the following condition is true
   if true => this.children[i].contains(target)
   return true
return false
*/
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



/*
 * Complexity: What is the time complexity of the above functions?
addChild
  O(1)
contains
  O(n)
 */
