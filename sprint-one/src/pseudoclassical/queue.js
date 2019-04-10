var Queue = function() {
<<<<<<< HEAD
  this.counter = 0;
  this.remove = 0;
};

Queue.prototype.enqueue = function(value) {
  this.counter ++;
  this[this.counter] = value;
};

Queue.prototype.dequeue = function() {
  if (this.counter > this.remove) {
    this.remove ++;
    var rem = this[this.remove];
    delete rem;
    return rem;
=======
  this.end = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(data) {
  this.storage[this.end] = data;
  this.end++;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
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


