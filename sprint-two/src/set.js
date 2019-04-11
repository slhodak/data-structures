var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  /* 
  check to see if the item exist in storage
  access the storage
  add the item in the storage
  */
  if (!_.contains(this._storage, item)) {
    this._storage.push(item);
  } 
};
 
setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  /*
  Get the index of the item 
  set a conditional if the item does not exit
   if item exist remove it from the array using splice
  */
  var index = _.indexOf(this._storage, item);
  if (index > -1) {
    return this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */