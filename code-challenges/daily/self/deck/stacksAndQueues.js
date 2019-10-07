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

class Queue{
  constructor(initialVal){
    if (initialVal){
      this.rear;
      let newNode = new Node (initialVal);
      this.front = newNode;
      this.rear = newNode;    
    } else{
      this.front = null;
      this.rear = null;
    }

  }

  
  ///takes in a value and adds new node with value to the rear of queue
  enqueue(value){
    if (!this.rear) {
      let addNode = new Node (value);
      this.rear = addNode;
      this.front = addNode;
    } else{
      let newNode = new Node(value);
      this.rear.next = newNode;
      this.rear = newNode;
      newNode.next = null;
    }
  }



  // takes no argument and remoe the node off the front of the queue and returns its value
  dequeue(){
    if (!this.front){
      return null;
    }
    let oldFront = this.front;
    this.front = this.front.next;
    oldFront.next = null;
    if (!this.front){
      this.rear = null;
    }
    return oldFront.data;

    
  }
  
  //takes no argument and returns the front
  peek(){
    return this.front.data;
  }

}


module.exports = {Queue, Stack};