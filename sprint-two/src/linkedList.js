var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) { 
      console.log(value);
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      var node = new Node(value);
      
      list.tail.next = node;
      
      list.tail = node;
    }

  };

  list.removeHead = function() {
    var popped = list.head;
    list.head = list.head.next;

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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
