const { expect } = require("chai");
const DoublyLinkedList = require("./doubly-ll"); // Adjust the import path accordingly

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  it("should push values to the end", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.getAt(0)).to.equal(1);
    expect(list.getAt(1)).to.equal(2);
    expect(list.getAt(2)).to.equal(3);
    expect(list.length).to.equal(3);
  });

  it("should unshift values to the start", () => {
    list.unshift(1);
    list.unshift(2);
    list.unshift(3);
    expect(list.getAt(0)).to.equal(3);
    expect(list.getAt(1)).to.equal(2);
    expect(list.getAt(2)).to.equal(1);
    expect(list.length).to.equal(3);
  });

  it("should pop values from the end", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    const popped = list.pop();
    expect(popped).to.equal(3);
    expect(list.length).to.equal(2);
    expect(list.getAt(0)).to.equal(1);
    expect(list.getAt(1)).to.equal(2);
  });

  it("should shift values from the start", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    const shifted = list.shift();
    expect(shifted).to.equal(1);
    expect(list.length).to.equal(2);
    expect(list.getAt(0)).to.equal(2);
    expect(list.getAt(1)).to.equal(3);
  });

  it("should get value at a specific index", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.getAt(0)).to.equal(1);
    expect(list.getAt(1)).to.equal(2);
    expect(list.getAt(2)).to.equal(3);
  });

  it("should set value at a specific index", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.setAt(1, 4);
    expect(list.getAt(1)).to.equal(4);
  });

  it("should insert value at a specific index", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.insertAt(1, 4);
    expect(list.getAt(1)).to.equal(4);
    expect(list.length).to.equal(4);
  });

  it("should remove value at a specific index", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    const removed = list.removeAt(1);
    expect(removed).to.equal(2);
    expect(list.length).to.equal(2);
  });

  it("should calculate the average", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    const avg = list.average();
    expect(avg).to.equal(2);
  });

  it("should handle an empty list", () => {
    expect(() => list.pop()).to.throw("List is empty");
    expect(() => list.shift()).to.throw("List is empty");
    expect(() => list.getAt(0)).to.throw("Invalid index");
    expect(() => list.setAt(0, 1)).to.throw("Invalid index");
    expect(() => list.removeAt(0)).to.throw("Invalid index");
  });
});
