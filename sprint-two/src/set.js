var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.keys = {};
  set.count = 0;
  return set;
  
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {

    this._storage[item] = item;
    this.count++; 
  }
};

setPrototype.contains = function(item) {
  
  return this._storage[item] === item;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
  this.count--;
};

setPrototype.size = function() {
  return this.count;
};



/*
 * Complexity: What is the time complexity of the above functions?
  add: O(1)
  contains: O(1)
  removes: O(1)
 */
 
 
 