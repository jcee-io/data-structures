var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.first = 0;
  this.last = 0;

};

Queue.prototype.enqueue = function (value) {
  this.storage[this.last] = value;
  this.last++;
  this.count++;
  
};

Queue.prototype.dequeue = function () {
  var popped = this.storage[this.first];
  delete this.storage[this.first];
  this.count--;
  this.first++;
  return popped;
};

Queue.prototype.size = function () {
  return this.count > 0 ? this.count : 0; 
};
