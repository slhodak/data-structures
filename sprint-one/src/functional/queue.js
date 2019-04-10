var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };
// iterator.call(context, obj[key], key, obj)
  someInstance.dequeue = function() {
    if (end) {
      var result = storage[0];
      for (var i = 0; i < end; i++) {
        storage[i] = storage[i + 1];
      }
      storage[end] = null;
      end--;
      return result;
    }
  };

  someInstance.size = function() {
    return end;
  };

  return someInstance;
};
