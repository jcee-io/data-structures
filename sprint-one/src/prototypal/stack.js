var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.
  var newStackMethods = Object.create(stackMethods);
  newStackMethods.storage = {};
  newStackMethods.count = 0;
  
  return newStackMethods;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  var popped = this.storage[this.count - 1];

  delete this.storage[this.count - 1];

  this.count--;

  return popped;
};

stackMethods.size = function() {
  return this.count > 0 ? this.count : 0;
};
