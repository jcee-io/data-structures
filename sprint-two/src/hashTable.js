

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.storage.get(index)
  //this.storage.set(index, value)
  //this.storage.each(callback)
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = new hashNode(k, v);
  if (!!this.retrieve(index)) {
    var oldNode = this._storage.get(index);
    oldNode.next = node;

  } else {
    
    this._storage.set(index, node);
  }



  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = this._storage.get(index);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  
  if (node.key !== k && node.next) {
    node = node.next;
  }

  return node.value;

};

HashTable.prototype.remove = function(k) {
  //FIXME: make it work with collisions
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removeNode = this._storage.get(index);


  this._storage.set(index, undefined);
};

var hashNode = function(k, v) {
  var obj = {};

  obj.key = k;
  obj.value = v;
  
  obj.next = null;
  
  return obj;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


