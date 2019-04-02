'use strict';

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(initialVal){
    if (initialVal){
      this.top = new Node(initialVal);
    } else{
      this.top = null;
    }
  }
  

  //takes value in, adds new node with value to the top
  push(value){
    if(!this.top){
      this.top = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  //takes no agrument and removes new node to the top of the stack
  pop(){
    if(!this.top){
      return null;
    }
    let toRemove = this.top;
    this.top = toRemove.next;
    toRemove.next = null;
    return toRemove.data;
  }

  //takes no argument and returns top node
  peek(){
    return this.top.data;
  }

}


//I am making the assumption that the null of the pseudoqueue matches up with the null of the stack. That makes the top equivillant to the head, and the bottom of the stack equivillant to the tail
class Pseudoqueue extends Stack{

  //add a new node to the bottom of the stack that is the pseudoqueue
  enqueue(value){ 
    let tempStack = new Stack();
    while(this.top){
      let temp = this.top.data;
      tempStack.push(temp);
      this.pop();
    }
    this.push(value);

    while(tempStack.top){
      let temp = tempStack.top.data;
      this.push(temp);
      tempStack.pop();
    }
  }

  // takes away a node at the top. The exact same as pop
  dequeue(){
    if(!this.top){
      return null;
    }
    let toRemove = this.top;
    this.top = toRemove.next;
    toRemove.next = null;
    return toRemove.data;  }

}

module.exports = {Pseudoqueue};