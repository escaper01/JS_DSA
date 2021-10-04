const OwnArray = require("../src/1_array");
let myOwnArray = new OwnArray();

describe("my own array implementation", () => {
  //insert
  it("insert first elem  1", () => {
    expect(myOwnArray.insert(1)).toEqual(1);
  });
  it("insert second elem 2", () => {
    expect(myOwnArray.insert(2)).toEqual(2);
  });
  it("insert third elem 3", () => {
    expect(myOwnArray.insert(3)).toEqual(3);
  });
  it("insert fourth elem 4", () => {
    expect(myOwnArray.insert(4)).toEqual(4);
  });

  //get
  it("get third elem", () => {
    expect(myOwnArray.get(1)).toEqual(2);
  });

  it("get non-existant elem", () => {
    expect(myOwnArray.get(99)).toEqual(-1);
  });

  // get first elem
  it("get first elem", () => {
    expect(myOwnArray.getFirst()).toEqual(1);
  });

  // get last
  it("get last elem", () => {
    expect(myOwnArray.getLast()).toEqual(4);
  });

  // check if elem exists
  it("check if 99 exists", () => {
    expect(myOwnArray.contains(99)).toEqual(false);
  });
  it("check if 3 exists", () => {
    expect(myOwnArray.contains(3)).toEqual(true);
  });

  //delete
  it("remove fourth elem 4", () => {
    expect(myOwnArray.remove(3)).toEqual(4);
  });
  it("remove second elem 1", () => {
    expect(myOwnArray.remove(1)).toEqual(2);
  });
  it("remove elem does not exists", () => {
    expect(myOwnArray.remove(99)).toEqual(-1);
  });

  it("get last elem", () => {
    expect(myOwnArray.getLast()).toEqual(3);
  });

  //get length == 3
  it("get array size", () => {
    expect(myOwnArray._length).toEqual(2);
  });
});
