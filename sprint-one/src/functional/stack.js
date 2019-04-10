var Stack = function() {
<<<<<<< HEAD
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
=======
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.pop = function() {
    if (top) {
      top--;
      return storage[top];
>>>>>>> 8754e9dfb7f3cd334d26b1b22e355a7d8d168ddf
    }
  };

  someInstance.size = function() {
<<<<<<< HEAD
    // return the counter since it will represend our size
    return counter;
=======
    return top;
>>>>>>> 8754e9dfb7f3cd334d26b1b22e355a7d8d168ddf
  };

  return someInstance;
};
