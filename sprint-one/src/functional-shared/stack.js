var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance = extend(instance, stackMethods);
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
