var Queue = function() {
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
  }
};

Queue.prototype.size = function() {
  if (this.counter > this.remove) {
    return this.counter - this.remove;
  } else if (this.remove >= this.counter) {
    return 0;
  }



};


