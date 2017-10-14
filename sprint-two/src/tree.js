var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { //O(1)
  var newTree = Tree(value);
  this.children.push(newTree);
  newTree.parent = this;
};

treeMethods.contains = function(target) { //O(n)
  var exists = false;

  var callback = function(node) {
    if (node.value === target) {
      exists = true;
    }
  };

  this.traverse(callback);

  return exists;
};

treeMethods.traverse = function(func) { 
  var traveller = function(node) {
    if (!node) {
      return;
    }
    func(node);

    for (var i = 0; i < node.children.length; i++) {
      traveller(node.children[i]);
    }
  };
  
  traveller(this);
};

treeMethods.removeFromParent = function(value) { 

  var callback = function(element) {
    if (element.value === value) {
      var parent = element.parent;
      element.parent = null;
      
      ///find child of parent to delete
      for (var i = 0; i < parent.children.length; i++) {
        if (parent.children[i].value === value) {
          delete parent.children[i];
          break;
        }
      }
    }
  };
  
  this.traverse(callback);
};




/*
 * Complexity: What is the time complexity of the above functions?
    addchild: O(1)
    contains: O(n)
 */
