'use strict';
let BST = require('../tree.js').BinarySearchTree;

let test = new BST(10);
let test2 = new BST(10);
let emptyTest = new BST;

describe('Binary Search Tree Creation', () => {

  it('Can instantiate an empty search tree', () => {
    expect(emptyTest.root).toEqual(null);
  });
  it('Can instantiate a search tree with a value', () => {
    expect(test.root.data).toEqual(10);
  });

});



describe('Binary Search Tree Addition', () => {

  it('Can successfully add a left child ', () => {
    test.add(5);
    expect(test.root.leftChild.data).toEqual(5);
  });
  it('Can successfully add a right child ', () => {
    test.add(20);
    expect(test.root.rightChild.data).toEqual(20);
  });

});




// describe ('Binary Search Tree Traversal', () =>{
//   test2.add(5);
//   test2.add(20);
//   test2.add(1);
//   test2.add(7);
//   test2.add(13);
//   test2.add(23);
//   it('Can Preform A preorder Traversal', ()=>{
//     // expect(test.preOrder()).toEqual([10,5,20,1,7,13,23]);
//     console.log(test.preOrder());

//   });
//   it('Can Preform A inorder Traversal', ()=>{
//     // expect(test.inOrder()).toEqual([1,5,7,10,13,20,23]);
//     console.log(test.inOrder());

//   });
//   it('Can Preform A post Traversal', ()=>{
//     console.log(test.postOrder());
//     // expect(test.postOrder()).toEqual([1,7,5,13,23,20,10]);
//   });

// });