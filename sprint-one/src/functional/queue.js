var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    count++;
    last++;
  };

  someInstance.dequeue = function() {
    var popped = storage[first];
    delete storage[first];
    count--;
    first++;
    return popped;
  };

  someInstance.size = function() {
    return count > 0 ? count : 0;
  };

  return someInstance;
};
