

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.connections = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.storage[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var keys = Object.keys(this.connections);

  keys = keys.filter(function(key) {
    return key[0] === node.toString();
  });

  if (keys.length > 0) {
    //keys[0] === '5,4'
    var split = keys[0].split(','); // ['5', '4'];
    this.removeEdge(split[0], split[1]);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.connections[fromNode + ',' + toNode] !== undefined;  
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.connections[fromNode + ',' + toNode] = fromNode + ',' + toNode;
  this.connections[toNode + ',' + fromNode] = toNode + ',' + fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.connections[fromNode + ',' + toNode];
  delete this.connections[toNode + ',' + fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    addNode: O(1)
    contains: O(1)
    removeNode: O(n)
    hasEdge: O(1)
    addEdge: O(1)
    removeEdge: O(1)
    forEachNode: O(n)
 */


