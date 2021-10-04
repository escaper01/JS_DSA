// create a tree
// traverse , remove , find , size, layersCounter
class Node {
  constructor(value) {
    this._value = value;
    this._right = null;
    this._left = null;
  }
}
class OwnTree {
  constructor() {
    this._root = null;
  }

  insert(value) {
    if (this._root === null) {
      this._root = new Node(value);
    } else {
      let current = this._root;
    }
  }
}
