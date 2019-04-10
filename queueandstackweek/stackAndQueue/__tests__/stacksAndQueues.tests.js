'use strict';
// imports
const Queue = require('../stacksAndQueues').Queue;
const Stack = require('../stacksAndQueues').Stack;
//NOTES ON QUEUES AND STACKS FOR READER! I understand I am iterating through the queue to test it, even though I am not supposed to in general.
//After i wrote this, i had a LONG conversation with Benicio (night teacher) about this
// const testing stuff
let key = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let keyTwo = ['Greg', 'Marcia', 'Peter', 'Jan', 'Bobby', 'Cindy'];
//tests
describe('stack module', () => {
  let rainbow = new Stack('violet');
  it('Can successfully push onto a stack', () =>{
    rainbow.push('indigo');
    expect(rainbow.top.data).toEqual('indigo');
    expect(rainbow.top.next.data).toEqual('violet');
  });
  it('Can successfully push multiple nodes onto a stack', () =>{
    rainbow.push('blue');
    rainbow.push('green');
    rainbow.push('yellow');
    rainbow.push('orange');
    rainbow.push('red');

    let current = rainbow.top;
    for(let i = 0; i < key.length; i++){
      expect(current.data).toEqual(key[i]);
      current = current.next;
    }
    
  });
  
  it('Can successfully pop off the stack', () =>{
    let popped = rainbow.pop();
    expect(popped).toEqual('red');
  });

  it('Can successfully empty a stack after multiple pops', () =>{
    for(let i = 0; i < 6; i++){
      rainbow.pop();
    }

    expect(rainbow.top).toEqual(null);
  });
  it('Can successfully peek the next item on the stack', () =>{
    for(let i = key.length-1; i >= 0; i--){
      rainbow.push(key[i]);
    }
    expect(rainbow.peek()).toEqual('red');
  });
  it('Can successfully instantiate an empty stack', () =>{
    let empty = new Stack();
    expect(empty.top).toEqual(null);
  });

});

describe('queue module', () => {
  let Brady = new Queue('Greg');
  console.log(Brady);
  it('Can successfully push onto a stack', () =>{
    Brady.enqueue('Marcia');
    console.log(Brady);
    expect(Brady.front.data).toEqual('Greg');
    expect(Brady.front.next.data).toEqual('Marcia');
    expect(Brady.rear.data).toEqual('Marcia');
    
  });

  it('Can successfully enqueue multiple items into a queue', () =>{
    for(let i = 2; i < keyTwo.length; i++){
      Brady.enqueue(keyTwo[i]);
    }
    let current = Brady.front;
    for(let i = 0; i < keyTwo.length; i++){
      expect(current.data).toEqual(keyTwo[i]);
      current = current.next;
    }
    expect(Brady.rear.data).toEqual('Cindy');
  });
  
  
  it('Can successfully dequeue off of a queue the expected value', () =>{
    let goneBrady = Brady.dequeue();
    expect(goneBrady).toEqual('Greg');
    expect(Brady.front.data).toEqual('Marcia');
  });

  it('Can successfully peek into a queue, seeing the expected value', () =>{

    expect(Brady.peek()).toEqual('Marcia');
  });
  it('Can successfully empty a queue after multiple dequeues', () =>{
    for(let i = keyTwo.length-1; i >= 0; i--){
      Brady.dequeue();
    }
    expect(Brady.front).toEqual(null);
    expect(Brady.rear).toEqual(null);
  });
  it('Can successfully instantiate an empty queue', () =>{
    let empty = new Queue();
    expect(empty.front).toEqual(null);
    expect(empty.rear).toEqual(null);

  });

});

