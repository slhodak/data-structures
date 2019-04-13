class DoublyLinkedList {
  
  constructor() {
    this.head = null;
    this.tail = null;  
  }

  addToTail(value) {
    var node = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;      
    }
  }

  addToHead(value) {
   var node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
  }

  removeTail() {
    //  save old tail
    //  disconnect old tail's previous
    //  tail points to tail previous
    //  disconnect new tail's next
    //  return old tail
    var oldTail = this.tail;
    this.tail = this.tail.previous;
    oldTail.previous = null;
    this.tail.next = null;
    return oldTail;
  }


  removeHead() {
    if (this.head === null) {
      return this.head;
    }
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  }

  search(target, fromHead) {
    if (fromHead) {
      var currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === target) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
        return false;
      } else {
      var currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === target) {
          return true;
        } else {
          currentNode = currentNode.previous;
        }
      }
      return false;
      }
    }
}

class Node {  
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}
