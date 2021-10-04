const OwnQueue = require("../src/3_queue");

let myOwnQueue = new OwnQueue();

describe("my own queue implementation", () => {
  //enqueue
  it("enqueue elem 1", () => {
    expect(myOwnQueue.enqueue(1)).toBe(1);
  });
  it("enqueue elem 2", () => {
    expect(myOwnQueue.enqueue(2)).toBe(2);
  });
  it("enqueue elem 3", () => {
    expect(myOwnQueue.enqueue(3)).toBe(3);
  });
  it("enqueue elem 4", () => {
    expect(myOwnQueue.enqueue(4)).toBe(4);
  });

  //dequeue
  it("dequeue elem", () => {
    expect(myOwnQueue.dequeue()).toBe(1);
  });

  //size
  it("queue size", () => {
    expect(myOwnQueue.size()).toBe(3);
  });
});
