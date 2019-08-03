var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!_.contains(this._storage, item)) {
    this._storage.push(item);
  } 
};
 
setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  var index = _.indexOf(this._storage, item);
  if (index > -1) {
    return this._storage.splice(index, 1)[0];

  }
};
