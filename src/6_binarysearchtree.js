class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while (true) {
        console.log(current);
        if (current.value < value) {
          //right
          if (current.right === null) {
            current.right = new Node(value);
            break;
          }
          current = current.right;
        } else {
          if (current.left === null) {
            current.left = new Node(value);
            break;
          }
          current = current.left;
        }
      }
    }
  }

  contains(value) {}

  min(node = null) {}

  max(node) {}

  remove(value) {}

  // left, root, right
  inOrderTraversal(node, func = console.log) {}

  // root, left, right
  preOrderTraversal(node, func = console.log) {}

  // left, right, root
  postOrderTraversal(node, func = console.log) {}
}

export { BinarySearchTree, Node };

let myBST = new BinarySearchTree();
myBST.insert(3);
myBST.insert(15);
myBST.insert(10);
console.log(myBST);
