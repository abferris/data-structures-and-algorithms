'use strict';

const find = require('../tree-intersection.js').findRepeats;
const store = require('../tree-intersection.js').storeValues;
const intersection = require('../tree-intersection.js').intersection;

const BST = require('../../../binarytreeweek/tree/tree.js').BinarySearchTree;

const HT = require('../../hashtable.js').HashTable;

const ht= new HT();


const t1 = new BST();
t1.add(15);
t1.add(10);
t1.add(20);
const t2 = new BST();
t2.add(15);
t2.add(1);
t2.add(25);
const t3 = new BST();
const t4 = '';
const t5 = new BST();
t5.add(15);
t5.add(15);
t5.add(3);
t5.add(5);

describe('storeValues function', () =>{

  xit('will iterate through a tree and store values', () => {
    store(t1,ht);
    console.log(ht);
    expect(true).toEqual(true);
  });

});

