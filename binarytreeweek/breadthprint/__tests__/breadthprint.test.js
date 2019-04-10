'use strict';
let Node = require('../../tree/tree.js').Node;
let BT = require('../../tree/tree.js').BinaryTree;
require('../breadthprint');


let test = new BT(10);
test.root.leftChild = new Node(5);
test.root.leftChild.leftChild = new Node(1);
test.root.leftChild.rightChild= new Node(7);
test.root.rightChild = new Node(15);
test.root.rightChild.leftChild = new Node(13);
test.root.rightChild.rightChild = new Node(20);
console.log(test.root);
describe('Binary Search Tree Creation', () => {
  // test.breadthsearch();
  // it('Can instantiate an empty search tree', () => {
  //   expect(emptyTest.root).toEqual(null);
  // });


});
