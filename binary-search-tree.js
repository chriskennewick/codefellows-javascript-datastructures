function BST(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error("Argument not an array");
  }

  this.root = null;

  //populate the bst
  arr.forEach(function(arr) {
    this.insert.call(this, arr);
  }, this);
}

BST.prototype = {
  size: function() {
    if (this.root === null) {
      return 0;
    }
    return this.root.size;
  },

  height: function() {
    var findHeight = function(node) {
      if (node === null) {
        return -1;
      }
      var left = findHeight(node.left);
      var right = findHeight(node.right);
      if (left > right) {
        return left + 1;
      }
      else {
        return right + 1;
      }
    };
    return findHeight(this.root);
  },

  contains: function(data) {
    return (this.find(data) !== null);
  },

  find: function(data) {
    var node = null;
    var currNode = this.root;
    var isFound = false;
    if (this.root === null) {
      return null;
    }
    else {
      while (!isFound && currNode !== null) {
        if (data === currNode.data) {
          node = currNode;
          isFound = true;
        }
        else if (data < currNode.data) {
          currNode = currNode.left;
        }
        else {
          currNode = currNode.right;
        }
      }
    }

    return node;
  },

  insert: function(data) {
    var node = {
      data: null,
      left: null,
      right: null,
      parent: null,
      size: null,
    };
    if (this.root === null) {
      node.data = data;
      node.size = 1;
      this.root = node;
    }
    else {
      var currNode = this.root;
      var done = false;

      while (currNode !== null && !done) {
        parentNode = currNode;
        currNode.size++;
        if (data <= currNode.data) {
          if (currNode.left === null) {
            done = true;
          }
          else {
            currNode = currNode.left;
          }
        }
        else {
          if (currNode.right === null) {
            done = true;
          }
          else {
            currNode = currNode.right;
          }
        }
      }
      node.parent = currNode;
      node.data = data;
      node.size = 1;
      if (data <= currNode.data) {
        currNode.left = node;
      }
      else {
        currNode.right = node;
      }
    }
  },

  delete: function(data) {

    var deleteHelper = function(node, data) {
      if (node === null) {
        return;
      }
      else if (data < node.data) {
        deleteHelper(node.left, data);
      }
      else if (data > node.data) {
        deleteHelper(node.right, data);
      }
      else {
        deleteNode.call(this, node, data);
      }
      node.size--;
    };
    var deleteNode = function(node, data) {
      var tempNode = node;
      if (node.left === null && node.right === null) {
        //leaf
        if (node.parent === null) {
          this.root = null;
        }
        else if (node.parent.data < data) {
          node.parent.right = null;
        }
        else {
          node.parent.left = null;
        }
      }

      else if (node.left === null) {
        //no left child
        if (node.parent === null) {
          this.root = node.right;
        }
        else {
          node.parent.right = node.right;
        }
        node.right.parent = node.parent;

      }
      else if (node.right === null) {
        //no right child
        if (node.parent === null) {
          this.root = node.left;
        }
        else {
          node.parent.left = node.left;
        }
        node.left.parent = node.parent;
      }
      else {
        //two children
        var minNode = node.right;
        while (minNode.left !== null) {
          minNode = minNode.left;
        }
        node.data = minNode.data;
        deleteHelper(node.right, minNode.data);
      }
    };
    deleteHelper.call(this, this.root, data);
  },

  print: function() {
    console.log(this.root);
  }
};

//test for array argument
try {
  var bstError = new BST("bad arg");
}
catch (e) {
  console.log(e);
}

var bst = new BST([33, 27, 1, 44, 88, 100, 4, 50]);
console.log(bst.size()); //8
console.log(bst.height()); //3
console.log(bst.contains(27)); //true
console.log(bst.contains(2)); //false

var bst2 = new BST([]);
console.log(bst2.size()); //0
console.log(bst2.height()); //-1
console.log(bst2.contains(3)); //false

var bst3 = new BST([1]);
console.log(bst3.size()); //1
console.log(bst3.height()); //0
console.log(bst3.contains(1)); //true

//one item
var bst4 = new BST([1]);
bst4.print();
bst4.delete(1);
bst4.print();

//delete root
var bst5 = new BST([5, 3, 4, 2, 1, 8, 7, 6, 9]);
bst5.print();
bst5.delete(5);
bst5.print();
//delete middle
bst5.delete(3);
bst5.print();