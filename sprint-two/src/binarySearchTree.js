var BinarySearchTree = function(value) {
  var tree = Object.create(searchTree);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var searchTree = {};

searchTree.insert = function(value) {
  /*
    check if value is less or greater than value of current node
      pass to left or right depending on conditional
        if relevant child node does not exist
          create node from value
          set our node to that child position
        if relevant child node does exist
          create node from value
          apply recursion on that child
  */
  if (value === this.value) {
    return;
  } else if (value < this.value) {
    //  go left
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    //  go right
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

searchTree.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    //  go left
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else {
    //  go right
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};

searchTree.depthFirstLog = function(callback) {
  //  apply callback to this node
  //  check if node has a left child
  //    if so call this function on child
  //  check if node has a right child 
  //    if so call this function on child
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
insert
  O(logn)
contains
  O(n)
depthFirstLog
  O(n)
 */
