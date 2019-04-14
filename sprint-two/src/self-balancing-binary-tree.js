var BalancingBinarySearchTree = function(value, depth = 0) {
    var tree = Object.create(searchTree);
    tree.value = value;
    tree.left = null;
    tree.right = null;
    tree.depth = depth;
    return tree;
  };
  
  var searchTree = {};
  
  searchTree.insert = function(value) {
    var depth = this.depth + 1;
    if (value === this.value) {
      return;
    } else if (value < this.value) {
      if (this.left !== null) {
        this.left.insert(value);
      } else {
        this.left = BalancingBinarySearchTree(value, depth);
      }
    } else {
      if (this.right !== null) {
        this.right.insert(value);
      } else {
        this.right = BalancingBinarySearchTree(value, depth);
      }
    }
  };
  
  searchTree.contains = function(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left !== null) {
        return this.left.contains(value);
      } else {
        return false;
      }
    } else {
     if (this.right !== null) {
        return this.right.contains(value);
      } else {
        return false;
      }
    }
  };
  
  searchTree.depthFirstLog = function(callback) {
   callback(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(callback);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(callback);
    }
  };

  searchTree.getNodes = function() {
    //  push all nodes into array (DFL)
    //  sort the array, return it
  };

  searchTree.rebalance = function() {

  };
