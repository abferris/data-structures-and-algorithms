'use strict';
let Node = require('../tree.js').Node;
let BST = require('../tree.js').BinarySearchTree;


let test = new BST(10);
test.add(5);
test.add(20);
test.add(1);
test.add(7);
test.add(13);
test.add(23);
let testkey = 23;
let test2 = new BST(10);
test2.add(5);
test2.add(20);
test2.add(1);
test2.add(2);
test2.add(13);
let test2key = 23;
let test3 = new BST();
let test3key = null;

describe('Binary Search Tree Breadth traversal', () => {
  test.breadthsearch();
  it('balanced tree works', () => {
    expect(test.maxValue()).toEqual(testkey);
  });

  xit('unbalanced tree works', () =>{
    expect(test2.maxValue()).toEqual(test2key);
  });

  xit('unbalanced tree works', () =>{
    expect(test3.breadthsearch()).toEqual(test3key);
  });

});
