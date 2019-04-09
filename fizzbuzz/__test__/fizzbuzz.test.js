'use strict';
let BST = require('../../tree/tree').BinarySearchTree;
let FB = require('../fizzbuzz.js').fizzbuzz;

let test2 = new BST(10);
let emptyTest = new BST();

describe ('FizzBuzz', () =>{
  test2.add(6);
  test2.add(20);
  test2.add(1);
  test2.add(7);
  test2.add(15);
  test2.add(23);
  console.log(test2.root);
  FB(test2);
  console.log(test2.root);

  it('will buzz', ()=>{
    expect(test2.root.data).toEqual('buzz');
  });
  it('will fizz', ()=>{
    expect(test2.root.leftChild.data).toEqual('fizz');
  });
  it('will fizzbuzz', ()=>{
    expect(test2.root.rightChild.leftChild.data).toEqual('fizzbuzz');
  });
  FB(emptyTest);
  it('will fizzbuzz on empty array', ()=>{
    expect(emptyTest.root).toEqual(null);
  });
});