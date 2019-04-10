'use strict';

const BT = require('../tree/tree.js').BinaryTree;
const Queue = require('../../queueandstackweek/stackAndQueue/stacksAndQueues.js').Queue;

class breadth extends BT{
  constructor(input){
    super(input);
  }
  breadthsearch() {
    const Q = new Queue;
    Q.enqueue(this.root);
    let current = Q.head;
    while (current){
      Q.dequeue();
      console.log(current.data);
      if (current.leftChild){
        Q.enqueue(current.leftChild);
      }
      if (current.rightChild){
        Q.enqueue(current.rightChild);
      }
      current = Q.head;
    }
  }
};

module.exports = {breadth}