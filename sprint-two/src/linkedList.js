var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //  create new node
    //  check if head and tail are null
    //    if so  
    //      both head and tail point to new node
    //    if not
    //      tail's node point to new node
    //      tail points to new node

    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    /*  if no head
          return list.head
        save head's node
        head points to head's next node
        return head's node
    */
    if (list.head === null) {
      return list.head;
    }
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    /*  start at head, save as current node
        set found bool to false
        while not found and current node is not null
          check if current node is the target
          if so return true
          if not make the current node the next node
        return false by default
    */
    var currentNode = list.head;
    var found = false;
    while(!found && currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return found;
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
 * Complexity: What is the time complexity of the above functions?
 */
