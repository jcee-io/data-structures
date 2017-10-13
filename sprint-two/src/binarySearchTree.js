var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.insert = function(value) {
    var node = BinarySearchTree(value);

    var traverse = function(root) {


      if (root.value < obj.value && !!root) {
        
        !!obj.left ? traverse(obj.left) : obj.left = root;

      } else if (!!root) {
        
        !!obj.right ? traverse(obj.right) : obj.right = root;

      }

      

    };
    
    traverse(node);
  };
  obj.contains = function(value) {};
  obj.depthFirstLog = function(func) {};
  
  return obj;
};



/*
 * Complexity: What is the time complexity of the above functions?
  idk
 */
