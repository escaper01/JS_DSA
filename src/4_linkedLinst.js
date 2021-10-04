class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class OwnLinkedList {
  constructor() {
    this._root = null;
    this._next = null;
    this._length = 0;
  }

  insert(value) {
    if (this._root === null) {
      this._root = new Node(value);
    } else {
      let current = this._root;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this._length++;
  }

  queryAll() {
    let current = this._root;
    let all = [];
    do {
      all.push(current.value);
      current = current.next;
    } while (current);
    return all;
  }

  delete(value) {
    let current = this._root;
    let prev = current;
    if (current.value === value) {
      this._root = this._root.next;
    } else {
      while (current.value !== value) {
        prev = current;
        current = current.next;
      }

      // swap value
      prev.next = current.next;
    }
    this._length--;
  }
}

let myOwnLinkedList = new OwnLinkedList();
myOwnLinkedList.insert(1);
myOwnLinkedList.insert(2);
myOwnLinkedList.insert(3);
myOwnLinkedList.insert(4);
myOwnLinkedList.insert(5);

myOwnLinkedList.delete(1);
console.log(myOwnLinkedList.queryAll());
console.log(myOwnLinkedList);
