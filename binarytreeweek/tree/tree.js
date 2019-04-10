'use strict';

const Queue = require('../../queueandstackweek/stackAndQueue/stacksAndQueues.js').Queue;


class Node{
  constructor(data){
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}


class BinaryTree{
  constructor(input){
    if( input ){
      let newNode = new Node(input);
      this.root = newNode;
    } else
    {this.root = null;}
  }

  preOrder (node=this.root, output = []) {
    
    output.push(node.data);

    if(node.leftChild) {
      this.preOrder(node.leftChild, output);
    }
    
    if(node.rightChild) {
      this.preOrder(node.rightChild, output);
    }

    return output;
  }

  inOrder (node=this.root, output = [])  {
   
    if(node.leftChild) {
      this.inOrder(node.leftChild, output);
    }

    output.push(node.data);

    if(node.rightChild) {
      this.inOrder(node.rightChild, output);
    }
    
    return output;
  }

  postOrder(node=this.root, output = []){

    if(node.leftChild) {
      this.inOrder(node.leftChild, output);
    }

    if(node.rightChild) {
      this.inOrder(node.rightChild, output);
    }

    output.push(node.data);
    
    return output;
  }

  breadthsearch() {
    const Q = new Queue;
    Q.enqueue(this.root);
    let current = Q.front;
    let output =[];
    if(!this.root){
      return output;
    }
    while (current){
      output.push(current.data.data);
      if (current.data.leftChild){
        Q.enqueue(current.data.leftChild);
      }

      if (current.data.rightChild){
        Q.enqueue(current.data.rightChild);
      }
      Q.dequeue();
      current = Q.front;
    }
    return output;
  }

}

class BinarySearchTree extends BinaryTree{
  constructor(input){
    super(input);
  }

  add(value){
    let current = this.root;
    if(!current) {
      return current = new Node(value);
    }
    while(current.data !== null){
      if( value < current.data ){
        if (!current.leftChild) {
          return current.leftChild = new Node(value);
        }
        current = current.leftChild;

      } else if( value > current.data ){
        if (!current.rightChild) {
          return current.rightChild = new Node(value);
        }
        current = current.rightChild;
      }
    }
  }
  contains(value){
    let current = this.root;
    while(current){
      if ( current.data === value ){
        return true;
      }
      if( value > current ){
        current = current.rightChild;
      }
      if( value < current ){
        current = current.leftChild;
      }
    }
    return false;
  }
}



module.exports = {BinaryTree, BinarySearchTree};