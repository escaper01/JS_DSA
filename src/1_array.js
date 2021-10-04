class OwnArray {
  constructor() {
    this._list = {};
    this._length = 0;
  }
  insert(value) {
    this._list[this._length] = value;
    this._length++;
    return this._list[this._length - 1];
  }
  remove(index) {
    //check if element exists
    if (this._list[index]) {
      let deletedItem = this._list[index];
      // reallocate all indexes after the chosen one
      let count = index;
      while (count !== this._length - 1) {
        this._list[count] = this._list[count + 1];
        count++;
      }
      delete this._list[count];
      this._length--;
      return deletedItem;
    } else {
      return -1;
    }
  }

  get(index) {
    if (index < this._length) {
      return this._list[index];
    } else {
      return -1;
    }
  }
  getFirst() {
    return this._list[0];
  }

  getLast() {
    return this._list[this._length - 1];
  }
  contains(element) {
    let currentIndex = 0;
    let found = false;
    while (currentIndex !== this._length) {
      if (this._list[currentIndex] === element) {
        found = true;
        return found;
      }
      currentIndex++;
    }
    return found;
  }
}

module.exports = OwnArray;
