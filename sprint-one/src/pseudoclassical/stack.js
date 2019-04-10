var Stack = function() {
  this.top = 0;
  this.storage = {};
};

Stack.prototype.push = function(data) {
  this.storage[this.top] = data;
  this.top++;
};

Stack.prototype.pop = function() {
  if (this.top) {
    this.top--;
    return this.storage[this.top];
  }
};

Stack.prototype.size = function() {
  return this.top;
};

