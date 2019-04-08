'use strict';

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
    if(node.left) {
      this.preOrder(node.leftChild, output);
    }
    if(node.right) {
      node.preOrder(node.rightChild, output);
    }
    return output;
  }

  inOrder(node=this.root, output = []){
    if(node.left) {
      this.inOrder(node.leftChild);
    }
    output.push(node.data);
    if(node.right) {
      this.inrder(node.rightChild);
    }
    return output;
  }
  
  postOrder(node=this.root, output = []){
    if(node.left) {
      this.postOrder(node.leftChild);
    }
    if(node.right) {
      this.postOrder(node.rightChild);
    }
    output.push(node.data);
    return output;
  }
}

class BinarySearchTree extends BinaryTree{
  constructor(input){
    super(input);
  }

  add(value){
    let current = this.root;
    // let left = current.left;
    // let right = current.right;
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