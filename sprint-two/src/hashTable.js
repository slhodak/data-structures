

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  this._isRehashing = false;
};
HashTable.prototype.rehash = function(isGrowing) {
  /*
  delcare a temp array to store the tupple
  iterate through each bucket thats defined
    iterate through each tuple in the bucket
      push each tuple to the temp array
    make the bucket equal to undefined
    
  change the designated size

  iterate though our temp and inseer the key and value 
  */
  
  var temp = [];
  var hash = this;
  this._isRehashing = true;
  this._storage.each(function(bucket) {
    if (bucket) {
      _.each(bucket, function(tuple) {
        temp.push(tuple);
      });
    }
  });

  if (isGrowing) {
    this._limit = this._limit * 2;
  } else {
    this._limit = this._limit * 0.5;
  }
  
  this._storage = LimitedArray(this._limit);

  _.each(temp, function(tuple) {
    hash.insert(tuple[0], tuple[1]);
  });

  this._isRehashing = false;
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
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      }
    }
    bucket.push(tuple);
  } else {
    this._storage.set(index, [tuple]);
  }
  
  if (!this._isRehashing) {
    this._counter++;
    if (this._counter >= Math.floor(this._limit * 0.75)) {
      this.rehash(true);
    }
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
  if (!this._isRehashing) {
    this._counter--;
    if (this._limit > 8 && this._counter <= Math.floor(this._limit * 0.25)) {
      this.rehash(false);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert
  O(1)
retrieve
  O(1)
remove
  O(1)
rehash
  O(n + m)
 */


