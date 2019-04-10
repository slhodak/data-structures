var Queue = function() {
  var storage = {};
  var someInstance = {};
  // declare a counter to keep track of the queue
  var counter = 0;
  // declare a counter to keep track of the removed ones
  var remove = 0;

  someInstance.enqueue = function(value) {
    // increment counter
    counter ++;
    // add to the storage
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    // set a conditional so that the counter is larger or equal than 0
    if (counter >= 0) {
      // increment remove counter
      remove ++;
      // create a variable for what we are dequeing
      var rem = storage[remove];
      // remove from the storage
      delete rem;
      // need to return what we are removing
      return rem;
    }
  };

  someInstance.size = function() {
    // set a condition to see if counter is larger than the removed
    if (counter >= remove) {
      // return counter minus the removed counter
      return counter - remove;
      // need a conditional if rmemove was pressed more than counter
    } else if (remove > counter) {
      return 0;
    }
  };
  return someInstance;
};
