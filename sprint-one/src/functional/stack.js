var Stack = function() {
  var storage = {};
  var someInstance = {};
  // use a counter to identify where we stand in the position
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // increment counter
    counter ++;
    // store in the storage with the key representing the counter and the value as a value
    storage[counter] = value;

  };

  someInstance.pop = function() {

    // need to set a variable for what we are removing
    var remove = storage[counter];
    // set a conditional if the counter is greater than 0
    if (counter > 0) {
      // decrement counter 
      counter --;
      // delete the key from the storage
      delete remove;
      // return what we removed
      return remove;
    }
  };

  someInstance.size = function() {
    // return the counter since it will represend our size
    return counter;
  };

  return someInstance;
};
