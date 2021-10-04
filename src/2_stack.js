class OwnStack {
  constructor() {
    this._list = [];
    this._length = 0;
  }

  insert(value) {
    this._list.push(value);
    this._length++;
    return value;
  }

  peek() {
    return this._list[this._length - 1];
  }

  pop() {
    let deletedElement = this._list[this._length - 1];
    delete this._list[this._length - 1];
    this._length--;
    return deletedElement;
  }
}

// let myOwnStack = new OwnStack();

// console.log(myOwnStack.pop());
// console.log(myOwnStack);

module.exports = OwnStack;
