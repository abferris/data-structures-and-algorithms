'use strict';

class Animal{
  constructor(animal){
    this.type = animal;
    this.next = null;
  }
}

class AnimalShelter{
  constructor(initialVal){
    if (initialVal==='dog' || initialVal==='cat') {
      let newNode = new Animal(initialVal);
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = null;
      this.tail = null;
    }

  }
  peek(){
    return this.head;
  }

  enqueue(animal){
    if(animal === 'dog' || animal === 'cat') {
      let temp = new Animal(animal);
      if(!this.head){
        this.head=temp;
        this.rear = temp;
      } else{
        this.tail.next= temp;
        this.tail = temp;
        temp.next = null;
      }
    }
  }

  dequeue(input){
    //if input is wrong return null
    let output;

    if (!this.head){
      return null;
    }
    if(input !== 'dog' && input !== 'cat'){
      return null;
    }
    if(this.head.type === input){
      let oldFront = this.head;
      this.head=this.head.next;
      oldFront.next=null;
      return oldFront.type;
    }

    // creates a point to reset on and puts it at the tail
    let temp = new Animal('temp');
    this.tail.next = temp;
    this.tail = temp;

    // initiates the temp variable for the head
    let toBack = this.head;

    while(this.head.type !== input && this.head.type !== temp){
      //sets head to next
      this.head = this.head.next;
      //removes old head from queue
      toBack.next = null;
      //sets it on the tail of queue
      this.tail.next = toBack;
      //recognizes it as tail of queue
      this.tail = toBack;
      //resets the toBack variable
      toBack = this.head;
    }
    console.log(toBack);
    //above will the loop before the last value can be pushed to the tail
    //removes the temp to move to back from the queue
    this.head=this.head.next;
    toBack.next = null;
    output = toBack;
    console.log(this, this. head.next.next);
    //while we haven't hit the temp again
    // while(this.head.type !== temp){
    //   //store the old head
    //   toBack = this.head;
    //   // move the head (this will break the while loop eventaully)
    //   this.head = this.head.next;
    //   //remove the old head from the queue
    //   toBack.next = null;
    //   //set it behind tail
    //   this.tail.next = toBack;
    //   //set it as new tail
    //   this.tail = toBack;
    // }
    // console.log(this.head);
  //   //remove the old head from the queue
  //   toBack.next = null;
  //   //set it behind tail
  //   this.tail.next = toBack;
  //   //set it as new tail
  //   this.tail = toBack;
  //   //remove the temp as head
  //   this.head.next =this.head;
  //   //return result
  //   return output;
  }
}   

module.exports = {AnimalShelter, Animal};