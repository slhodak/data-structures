class Queue {
  constructor() {
    this.end = 0;
    this.storage = {};
  }
  enqueue(data) {
    this.storage[this.end] = data;
    this.end++;
  }
  dequeue() {
    if (this.end) {
      var firstInLine = this.storage[0];
      for (var i = 0; i < this.end; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      this.end--;
      return firstInLine;
    }
  }
  size() {
    return this.end;
  }
}