var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Queue = function() {
  var storage = {};
  storage.counter = 0;
  storage.remove = 0;
  extend(storage, queueMethods);
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // increment counter
  this.counter++;
  // store in the storage
  this[this.counter] = value;
};

queueMethods.dequeue = function() {
  // if the counter is greater than 0
  if (this.counter > 0) {
    // increment remove
    this.remove ++;
    // declare a var for what is being removed
    var rem = this[this.remove];
    // delete what you want to remove
    delete rem;
    // return what you removed
    return rem;
  }
};

queueMethods.size = function() {
  // set a conditional if the counter is larger than remove
  if (this.counter > this.remove) {
    // return counter minus remove
    return this.counter - this.remove;
    // else  if remove is larger than counter 
  } else if (this.remove >= this.counter) {
    // return 0
    return 0;
  }


};


