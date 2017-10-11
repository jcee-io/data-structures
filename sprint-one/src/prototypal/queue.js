var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueueMethods = Object.create(queueMethods);
  newQueueMethods.storage = {};
  newQueueMethods.count = 0;
  newQueueMethods.first = 0;
  newQueueMethods.last = 0;
  
  return newQueueMethods;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.count++;
  this.last++;
};

queueMethods.dequeue = function() {
  var popped = this.storage[this.first];
  delete this.storage[this.first];
  this.count--;
  this.first++;
  return popped;
};

queueMethods.size = function() {
  return this.count > 0 ? this.count : 0;
};