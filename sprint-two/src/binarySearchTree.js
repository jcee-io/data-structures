var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.insert = function(value) {
    var node = BinarySearchTree(value);

    var traverse = function(root) {
      if (value < root.value) {
        if (!root.left) {
          root.left = node;
        } else {
          traverse(root.left);
        }

      } else {
        if (!root.right) {
          root.right = node;  
        } else {
          traverse(root.right);
        }
      }
    };
    
    traverse(obj);
  };
  obj.contains = function(value) {
    
    var recurse = function(root) {

      if (!root) {
        return false;
      } else if (root.value === value) {
        return true;
      }

      if (value < root.value) {
        return recurse(root.left);
      } else {
        return recurse(root.right);
      }
    };

    return recurse(obj);
  };

  obj.depthFirstLog = function(func) {
    
    var recur = function(root) {
      if (root) {
        func(root.value);
        recur(root.left);
        recur(root.right);
      }
    };

    recur(obj);
  };

  return obj;
};



/*
 * Complexity: What is the time complexity of the above functions?
   insert: O(log n)
   contains: O(log n)
   depthfirstLog: O(n)
 */
