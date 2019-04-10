var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var instance = Object.create(Queue.prototype);
  instance.end = 0;
  instance.storage = {};
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(data) {
  this.storage[this.end] = data;
  this.end++;
};

queueMethods.dequeue = function() {
  if (this.end) {
    var firstInLine = this.storage[0];
    for (var i = 0; i < this.end; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.end--;
    return firstInLine;
  }
};

queueMethods.size = function() {
  return this.end;
};

Queue.prototype.methods = queueMethods;