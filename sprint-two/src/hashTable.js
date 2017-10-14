

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.keys = [];
  this.indexes = [];
};

//NOTES: Requires a more complex hashing function to minimize the time complexity
//The rationale of the keys and index arrays is due to the fact that we are under 
//the assumption that they are private variables. The 'drop in the ocean' (DITO) 
//theory is used in order to search the buckets which would mean virtual constant 
//time complexity in order to utilize itself to its full potential.

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var keysArray = this.keys;
  var indexArray = this.indexes;

  //when there's literally nothing in the index
  if (!indexArray.includes(index)) {
    //initializes the index
    this._storage.set(index, [tuple]);
    this.keys.push(k);
    this.indexes.push(index);
    this.checkIfResize('insert');

  } else { //index exists
    
    var bucket = this._storage.get(index);
    
    //for overwriting same keys
    if (keysArray.includes(k)) {
      //drop in the ocean theory: O(1) at best O(n) at worst   
      bucket.forEach(function(element) {
        if (element[0] === k) {
          element[1] = v; 
        }

      }); 
    //to prevent collisions, we simply just push to the bucket
    } else {
      
      bucket.push(tuple);
      this.keys.push(k);
      this.checkIfResize('insert');

    } 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexArray = this.indexes;

  
  if (indexArray.includes(index)) {
    var bucket = this._storage.get(index);

    //checks if k exists in a tuple
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].includes(k)) {
        //returns the value of the tuple
        return bucket[i][1];
      }
    }

  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  //FIXME: make it work with collisions

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var keysArr = this.keys;
  var newArr = [];
  var newKeyArr = [];
  //also uses the DITB theory with O(1)
  //through scoping it exclusively to the array, it is O(n)
  bucket.forEach(function(element) {
    if (element[0] !== k) {
      newArr.push(element);  
    }

  });

  keysArr.forEach(function(key) {
    if (key !== k) {
      newKeyArr.push(key);
    }
  });

  this.keys = newKeyArr;

  this._storage.set(index, newArr);

  this.checkIfResize('remove');
};

HashTable.prototype.checkIfResize = function (method) {
  var toDouble = this._limit * (3 / 4);
  var toHalve = this._limit * (1 / 4);

  if (this.size() >= toDouble && method === 'insert') {
    this.double();
  }

  if (this.size() <= toHalve && method === 'remove') {

    if (this._limit > 8) {
      this.halve();
    }
    
 
  }

};

HashTable.prototype.double = function() {
  var newLimit = this._limit * 2;
  var indexArray = this.indexes;
  var collection = [];

  for (var i = 0; i < indexArray.length; i++) {
    collection = collection.concat(this._storage.get(indexArray[i]));
  }



  this._storage = LimitedArray(newLimit);
  this._limit *= 2;
  this.keys = [];
  this.indexes = [];

  for (var j = 0; j < collection.length; j++) {
    var k = collection[j][0];
    var v = collection[j][1];
    //console.log(collection[j]);
    this.insert(k, v);
  }

};

HashTable.prototype.halve = function() {

  var newLimit = this._limit / 2;
  var indexArray = this.indexes;
  var collection = [];

  for (var i = 0; i < indexArray.length; i++) {
    collection = collection.concat(this._storage.get(indexArray[i]));
  }



  this._storage = LimitedArray(newLimit);
  this._limit /= 2;
  this.keys = [];
  this.indexes = [];

  for (var j = 0; j < collection.length; j++) {
    var k = collection[j][0];
    var v = collection[j][1];
    //console.log(collection[j]);
    this.insert(k, v);
  }

  
};

HashTable.prototype.size = function() {
  return this.keys.length;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */


