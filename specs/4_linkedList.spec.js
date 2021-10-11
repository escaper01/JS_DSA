const OwnLinkedList = require("../src/4_linkedLinst");

let myOwnLinkedList = new OwnLinkedList();

describe("my own linkedlist implementation", () => {
  //insert
  it("insert elem 1", () => {
    expect(myOwnLinkedList.insert(1)).toBe(1);
  });
  it("insert elem 2", () => {
    expect(myOwnLinkedList.insert(2)).toBe(2);
  });
  it("insert elem 3", () => {
    expect(myOwnLinkedList.insert(3)).toBe(3);
  });
  it("insert elem 4", () => {
    expect(myOwnLinkedList.insert(4)).toBe(4);
  });
  it("insert elem 5", () => {
    expect(myOwnLinkedList.insert(5)).toBe(5);
  });

  //delete
  it("delete elem 1", () => {
    expect(myOwnLinkedList.delete(1)).toBe(1);
  });
  it("delete elem 4", () => {
    expect(myOwnLinkedList.delete(4)).toBe(4);
  });

  //length
  it("length of linked list", () => {
    expect(myOwnLinkedList._length).toBe(3);
  });

  //queryAll
  it("delete elem 4", () => {
    expect(myOwnLinkedList.queryAll()).toEqual([2, 3, 5]);
  });
});
