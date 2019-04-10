var Stack = function() {
<<<<<<< HEAD
  var obj = Object.create(stackMethods);
  obj.counter = 0;
  return obj;
=======
  var newStack = Object.create(stackMethods);
  newStack.top = 0;
  newStack.storage = {};
  
  return newStack;
>>>>>>> 8754e9dfb7f3cd334d26b1b22e355a7d8d168ddf
};

var stackMethods = {};

<<<<<<< HEAD
stackMethods.push = function(value) {
  this.counter ++;
  this[this.counter] = value;
};

stackMethods.pop = function() {
  if (this.counter > 0) {
    var rem = this[this.counter];
    this.counter --;
    delete rem;
    return rem;
  }
};

stackMethods.size = function() {
  return this.counter;
};

=======
stackMethods.push = function(data) {
  this.storage[this.top] = data;
  this.top++;
};

stackMethods.pop = function() {
  if (this.top) {
    this.top--;
    return this.storage[this.top];
  }
};
>>>>>>> 8754e9dfb7f3cd334d26b1b22e355a7d8d168ddf

stackMethods.size = function() {
  return this.top;
};