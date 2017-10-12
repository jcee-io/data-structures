var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { //O(1)
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) { //O(n)
  
  var recurse = function(node) {
  
    if (node.value === target) {
      return true;
    }
    
    for (var i = 0; i < node.children.length; i++) {
  
      if (recurse(node.children[i])) {
        return true;
      }

    }

    
  };
  
  
  return recurse(this) ? true : false;
};





/*
 * Complexity: What is the time complexity of the above functions?
    addchild: O(1)
    contains: O(n)
 */
