var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.top = 0;
  newStack.storage = {};
  
  return newStack;
};

var stackMethods = {};

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

stackMethods.size = function() {
  return this.top;
};