var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Stack = function() {
  var storage = {};
  // declare a var for counter
  storage.counter = 0;
  extend(storage, stackMethods);
  return storage;
  
};

var stackMethods = {};

stackMethods.push = function(value) {
  // increment counter 
  this.counter ++;
  // add to the storage
  this[this.counter] = value;
};

stackMethods.pop = function() {
  // set a conditional if counter  is greter than or equal to 0
  if (this.counter > 0) {
    // create a var for what is being removed
    var rem = this[this.counter];
    // decrement counter 
    this.counter --;
    // delete the what we are remove
    delete rem;
    // return what we removed
    return rem;
  }
};
stackMethods.size = function() {
  return this.counter;
  // return the size of the counter

};


