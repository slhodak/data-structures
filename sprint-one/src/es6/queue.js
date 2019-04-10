class Queue {
  constructor() {
    this.counter = 0;
    this.remove = 0;
  }
  enqueue(value) {
    this.counter ++;
    this[this.counter] = value;
  }
  dequeue() {
    if (this.counter > this.remove) {
      this.remove ++;
      var rem = this[this.remove];
      delete this[this.remove];
      return rem;
    }
  }
  size() {
    if (this.counter > this.remove) {
      return this.counter - this.remove;
    } else if (this.counter <= this.remove) {
      return 0;
    }

  }
}
