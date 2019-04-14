var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.findMiddle = function() {
    var fast = this.head;
    var slow = this.head;
    while(true) {
      if (fast === null || fast.next === null) {
        foundEnd;
        return slow;
      }
      fast = fast.next.next;
      slow = slow.next;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return list.head;
    }
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  list.retrieve = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return currentNode.value;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
Complexity: What is the time complexity of the above functions?

addToTail
  O(1)
removeHead
  O(1)
contains
  O(n)

 */
