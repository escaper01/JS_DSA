class OwnQueue {
  constructor() {
    this._list = [];
    this._length = 0;
  }

  enqueue(value) {
    this._list.push(value);
    this._length++;
    return value;
  }

  dequeue() {
    let currentIndex = 0;
    let dequeuedElem = this._list[0];
    while (currentIndex !== this._length - 1) {
      this._list[currentIndex] = this._list[currentIndex + 1];
      currentIndex++;
    }
    this._length--;
    return dequeuedElem;
  }
  size() {
    return this._length;
  }
}

module.exports = OwnQueue;
