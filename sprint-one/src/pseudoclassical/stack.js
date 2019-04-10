var Stack = function() {
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.counter ++;
  this[this.counter] = value;
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    var rem = this[this.counter];
    this.counter --;
    delete rem;
    return rem;
  }

};

Stack.prototype.size = function() {
  return this.counter;
  
};


