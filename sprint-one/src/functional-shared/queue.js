var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var data = {};
  data.count = 0;
  data.first = 0;
  data.last = 0;
  data.storage = {};
  _.extend(data, queueMethods);
  return data;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
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

