var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.counter = 0;
  obj.remove = 0;
  return obj;
};

var queueMethods = {};

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
  }
};

queueMethods.size = function() {
  if (this.counter > this.remove) {
    return this.counter - this.remove;
  } else if (this.remove >= this.counter) {
    return 0;
  }

};
