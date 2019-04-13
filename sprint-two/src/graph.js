

// Instantiate a new graph
var Graph = function() {
  this.collection = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //  store the node as a key in the collection, value as empty array
  this.collection[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // determine if the node exists in the collection as a key
  return this.collection.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.collection[node.toString()];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //  identify from node and check array for to node
  //  identify to node and check array for from node
  return _.contains(this.collection[fromNode.toString()], toNode) && _.contains(this.collection[toNode.toString()], fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //  add from into array of to
  //  add to into array of from
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.collection[fromNode.toString()].push(toNode);
    this.collection[toNode.toString()].push(fromNode);  
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //  get into array of fromNode
  //      find and save index of toNode within that array
  //      splice out the toNode value using index variable
  //  repeat above for toNode
  var indexOfToNode = _.indexOf(this.collection[fromNode.toString()], toNode);
  if (indexOfToNode !== -1) {
    this.collection[fromNode.toString()].splice(indexOfToNode, 1);
  }
  var indexOfFromNode = _.indexOf(this.collection[toNode.toString()], fromNode);
  if (indexOfFromNode !== -1) {
    this.collection[toNode.toString()].splice(indexOfFromNode, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //  get all nodes in array
  //  apply callback to each one
  _.each(this.collection, function(value, key, collection) {
    cb(parseInt(key));
  });
};

/*
  * Complexity: What is the time complexity of the above functions?
  addNode
    O(1)
  contains
    O(1)
  removeNode
    O(1)
  hasEdge
    O(n)
  addEdge
    O(1)
  removeEdge
    O(n + m)
  forEachNode
    O(n)
 */
