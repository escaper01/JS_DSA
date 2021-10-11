// create a tree
// inOrderTraversal , remove , find , size, layersCounter
class Node {
  constructor(value) {
    this._value = value;
    this._children = [];
  }
}
class OwnTree {
  constructor() {
    this._root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (this._root === null) {
      this._root = node;
    } else {
      let current = this._root;
      let mystack = [];
      mystack = mystack.concat(current);
      while (mystack.length) {
        if (current._children.length < 2) {
          current._children.push(node);
          break;
        } else {
          current = mystack.shift();
          mystack = mystack.concat(current._children);
        }
      }
    }
  }

  size(myroot, size = 0) {
    let queue = [myroot];

    while (queue.length !== 0) {
      let current = queue.pop();
      size++;
      if (current._children) {
        queue = queue.concat(current._children);
      }
    }
    return size;
  }
}

let myTree = new OwnTree();

myTree.insert(0);
myTree.insert(1);
myTree.insert(2);
myTree.insert(3);
myTree.insert(4);
myTree.insert(5);
myTree.insert(6);
console.log(myTree);
