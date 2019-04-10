var Queue = function() {
<<<<<<< HEAD
  var obj = Object.create(queueMethods);
  obj.counter = 0;
  obj.remove = 0;
  return obj;
=======
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var instance = Object.create(queueMethods);
  instance.end = 0;
  instance.storage = {};
  
  return instance;
>>>>>>> 8754e9dfb7f3cd334d26b1b22e355a7d8d168ddf
};

var queueMethods = {};

<<<<<<< HEAD
queueMethods.enqueue = function(value) {
  this.counter++;
  this[this.counter] = value;
};

queueMethods.dequeue = function() {
  if (this.counter > this.remove) {
    this.remove ++;
    var rem = this[this.remove];
    delete rem;
    return rem;
=======
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
>>>>>>> 8754e9dfb7f3cd334d26b1b22e355a7d8d168ddf
  }
};

queueMethods.size = function() {
<<<<<<< HEAD
  if (this.counter > this.remove) {
    return this.counter - this.remove;
  } else if (this.remove >= this.counter) {
    return 0;
  }

=======
  return this.end;
>>>>>>> 8754e9dfb7f3cd334d26b1b22e355a7d8d168ddf
};
