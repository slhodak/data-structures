var Queue = function() {
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
  }
};

Queue.prototype.size = function() {
  return this.end;
};


