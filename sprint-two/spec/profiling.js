//  Linked List
//  create a large number of linked lists
//  add a few elements to all of them
//  use contains on all
var testLinkedLists = function(listCount, nodeCount) {
  var lists = [];
  for (var i = 0; i < listCount; i++) {
    lists.push(LinkedList());
  }
  _.each(lists, function(list) {
    for (var i = 0; i < nodeCount; i++) {
      list.addToTail(i);
    }
  });

  _.each(lists, function(list) {
    list.contains(Math.floor(nodeCount * 0.75));
  });

  _.each(lists, function(list) {
    list.removeHead();
  });
};

//  Tree
var testTrees = function(treeCount, branchCount) {
  var trees = [];
  for (var i = 0; i < treeCount; i++) {
    trees.push(Tree());
  }
  for (var i = 0; i < treeCount; i++) {
    randomTree(trees[i], branchCount);
  }

  for (var i = 0; i < treeCount; i++) {
    trees[i].contains(Math.floor(branchCount * 0.75));
  }
};

var randomTree = function(tree, value) {
  //  maybe create a new child
  //  maybe try to move into a child and start adding children there
  if (value) {
    if (Math.random() < 0.5) {
      tree.addChild(value);
    } else {
      if (tree.children.length) {
        randomTree(tree.children[Math.floor(Math.random() * tree.children.length)], value - 1);
      }
    }
  } else {
    return;
  }
};


//  Graph



//  Set



//  Hash Table



//  Binary Search Tree