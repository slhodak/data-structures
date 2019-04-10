class Stack {
  constructor() {
    this.top = 0;
    this.storage = {};
  }
  size() {
    return this.top;
  };
  pop() {
    if (this.top) {
      this.top--;
      return this.storage[this.top];
    }
  };
  push(data) {
    this.storage[this.top] = data;
    this.top++;
  };
}