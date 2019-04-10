var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.counter = 0;
  return obj;
};

var stackMethods = {};

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


