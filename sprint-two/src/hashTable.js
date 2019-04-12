

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  /*
  create an array from the key and value -tuple
  use the helper function to add our tuple for the given index

  check to see if the bucket if defined
    if not create the array and push the key and values in the array
  if the bucket exist
    push the key and value into the bucket with the given index
  */  
 
 var tuple = [k, v];
 var bucket = this._storage.get(index);
  if (bucket) {
    // iterate through bucket
    // check to see if the key exist
    // if so overwrite the key with a new value
    for(var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      }
    }
    bucket.push(tuple);
  } else {
    this._storage.set(index, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var pair = bucket[i];
    if (pair[0] === k) {
      return pair[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  /* 
  find the designated bucket
  iterate through the bucket
  find the right key value pair
  splice the out tuple
  */
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


