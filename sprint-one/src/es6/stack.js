class Stack {
  constructor() {
    this.counter = 0;
  }
  push(value) {
    this.counter ++;
    this[this.counter] = value;
  }
  pop() {
    if (this.counter > 0) {
      var rem = this[this.counter];
      delete this[this.counter];
      this.counter --;
      return rem;
    }
    
  }
  size() {
    return this.counter;

  }
}