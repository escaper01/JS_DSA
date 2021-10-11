// not yet : remove , find , layersCounter
// completed : insert, traverse
class Node {
  constructor(value) {
    this._value = value;
    this._right = null;
    this._left = null;
  }
}
class OwnBinaryTree {
  constructor() {
    this._root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this._root === null) {
      this._root = node;
    } else {
      let current = this._root;
      while (true) {
        if (node._value > current._value) {
          //right
          if (current._right) {
            current = current._right;
          } else {
            current._right = node;
            break;
          }
        } else {
          //left
          if (current._left) {
            current = current._left;
          } else {
            current._left = node;
            break;
          }
        }
      }
    }
  }

  preOrderTraversal(node, list = []) {
    if (!node) return list;
    list.push(node._value);
    if (node._left) this.preOrderTraversal(node._left, list);
    if (node._right) this.preOrderTraversal(node._right, list);
    return list;
  }

  inOrderTraversal(node, list = []) {
    if (!node) return list;
    if (node._left) this.inOrderTraversal(node._left, list);
    list.push(node._value);
    if (node._right) this.inOrderTraversal(node._right, list);
    return list;
  }
  postOrderTraversal(node, list = []) {
    if (!node) return list;
    if (node._left) this.postOrderTraversal(node._left, list);
    if (node._right) this.postOrderTraversal(node._right, list);
    list.push(node._value);
    return list;
  }
}

let myOwnBinaryTree = new OwnBinaryTree();

myOwnBinaryTree.insert(1);
myOwnBinaryTree.insert(2);
myOwnBinaryTree.insert(3);
myOwnBinaryTree.insert(10);
myOwnBinaryTree.insert(5);
myOwnBinaryTree.insert(4);
myOwnBinaryTree.insert(7);
myOwnBinaryTree.insert(6);
myOwnBinaryTree.insert(9);
myOwnBinaryTree.insert(8);
myOwnBinaryTree.preOrderTraversal(myOwnBinaryTree._root); //   [ 1, 2, 3, 10, 5, 4, 7, 6, 9, 8 ]
myOwnBinaryTree.inOrderTraversal(myOwnBinaryTree._root); //    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
myOwnBinaryTree.postOrderTraversal(myOwnBinaryTree._root); //     [ 4, 6, 8, 9, 7, 5, 10, 3, 2, 1 ]
