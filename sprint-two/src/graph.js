var Graph = function() {
  this.collection = {};
};

Graph.prototype.addNode = function(node) {
  if (typeof node === 'number') {
    this.collection[node] = [];
  } else {
    throw new Error('Input must be a number');
  }
};

Graph.prototype.contains = function(node) {
  return this.collection.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node) {
  delete this.collection[node.toString()];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return _.contains(this.collection[fromNode.toString()], toNode) && _.contains(this.collection[toNode.toString()], fromNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.collection[fromNode.toString()].push(toNode);
    this.collection[toNode.toString()].push(fromNode);  
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexOfToNode = _.indexOf(this.collection[fromNode.toString()], toNode);
  if (indexOfToNode !== -1) {
    this.collection[fromNode.toString()].splice(indexOfToNode, 1);
  }
  var indexOfFromNode = _.indexOf(this.collection[toNode.toString()], fromNode);
  if (indexOfFromNode !== -1) {
    this.collection[toNode.toString()].splice(indexOfFromNode, 1);
  }
};

Graph.prototype.forEachNode = function(cb) {
  _.each(this.collection, function(value, key, collection) {
    cb(parseInt(key));
  });
};
