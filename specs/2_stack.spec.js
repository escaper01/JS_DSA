const OwnStack = require("../src/2_stack");
let myOwnStack = new OwnStack();

describe("my own stack implementation", () => {
  //insert
  it("insert first elem  1", () => {
    expect(myOwnStack.insert(1)).toEqual(1);
  });
  it("insert second elem 2", () => {
    expect(myOwnStack.insert(2)).toEqual(2);
  });
  it("insert third elem 3", () => {
    expect(myOwnStack.insert(3)).toEqual(3);
  });
  it("insert fourth elem 4", () => {
    expect(myOwnStack.insert(4)).toEqual(4);
  });

  //peek
  it("peek last elem", () => {
    expect(myOwnStack.peek()).toEqual(4);
  });

  //pop
  it("peek last elem", () => {
    expect(myOwnStack.pop()).toEqual(4);
  });

  //peek
  it("peek last elem", () => {
    expect(myOwnStack.peek()).toEqual(3);
  });

  //pop
  it("peek last elem", () => {
    expect(myOwnStack.pop()).toEqual(3);
  });
});
