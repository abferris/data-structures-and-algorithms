'use strict';

class Node {
  constructor(value){
    this.val=value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head=null;
  }
  insert(input){

    if(!input) return null;

    let newNode = new Node(input);
    newNode.next = this.head;
    this.head = newNode;
    
  }

  includes(input){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.val===input) {
        return true;
      }
      else {
        currentNode=currentNode.next;
      }
    }
    return false;

  }

  print(){
    let output = [];
    let current = this.head;
    while(current) {
      output.push(current.val);
      current = current.next;
    }
    return output;
  }
}


module.exports = {LinkedList};
