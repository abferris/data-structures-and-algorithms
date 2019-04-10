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
let testkey = [10,5,20,1,7,13,23];
let test2 = new BST(10);
test2.add(5);
test2.add(20);
test2.add(1);
test2.add(2);
test2.add(13);
let test2key = [10,5,20,1,13,2];
let test3 = new BST();
let test3key = [];

describe('Binary Search Tree Creation', () => {
  test.breadthsearch();
  it('balanced tree works', () => {
    expect(test.breadthsearch()).toEqual(testkey);
  });

  it('unbalanced tree works', () =>{
    expect(test2.breadthsearch()).toEqual(test2key);
  });

  it('unbalanced tree works', () =>{
    expect(test3.breadthsearch()).toEqual(test3key);
  });

});
