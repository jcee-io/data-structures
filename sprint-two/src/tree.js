var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  newTree.parent = [];

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
      //traveller(node.left)
      //traveller(node.right)
    }
  };
  
  
  traveller(this);
};

// treeMethods.removeFromParent = function(value) { 
//   var stored;

//   var toStore = function(node) {
    
//     if (node) {

//       if (node.value === value) {
//         stored = node;
//       }
//       for (var i = 0; i < node.children.length; i++) {
//         toStore(node.children[i]);
//       } 
   
//     }

//   };
//   toStore(this);
//   stored.parent = [];
//   stored.children = [];
//   delete stored;

// };




/*
 * Complexity: What is the time complexity of the above functions?
    addchild: O(1)
    contains: O(n)
 */
