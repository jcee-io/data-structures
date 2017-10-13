var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) { 
   
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      var node = new Node(value);
      
      list.tail.next = node;
      node.previous = list.tail;
      list.tail = node;
    }

  };

  list.removeHead = function() {
    var popped = list.head;
    list.head = list.head.next;

    return popped.value;
  };

  list.removeTail = function() {
    var popped = list.tail;
    list.tail = list.tail.previous;

    return popped.value;
  };

  list.contains = function(target) {
    for (var node = list.head; node != null; node = node.next) {
      if (node.value === target) {
        return true;
      }
    }
    return false;
  };

  list.addToHead = function(value) {
    if (!list.head) {  
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      var newNode = new Node(value);
      newNode.next = list.head;
      list.head.previous = newNode; 
      list.head = newNode;
    }

  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail: O(1)
    removeHead: O(1)
    contains: O(n)
 */
