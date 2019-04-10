var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance = _.extend(instance, stackMethods);
  instance.top = 0;
  instance.storage = {};
  
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top] = value;
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
