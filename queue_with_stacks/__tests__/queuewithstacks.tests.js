'use strict';
// imports
const Pseudoqueue = require('../queue-with-stacks').Pseudoqueue;
//NOTES ON QUEUES AND STACKS FOR READER! I understand I am iterating through the queue to test it, even though I am not supposed to in general.
//After i wrote this, i had a LONG conversation with Benicio (night teacher) about this
// const testing stuff
let key = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let keyTwo = ['Greg', 'Marcia', 'Peter', 'Jan', 'Bobby', 'Cindy'];
//tests
 
describe('Psuedoqueue module', () => {
  let Brady = new Pseudoqueue('Greg');
  it('Can successfully push onto a stack', () =>{
    Brady.enqueue('Marcia');
    expect(Brady.top.data).toEqual('Greg');
    expect(Brady.top.next.data).toEqual('Marcia');
   
    
  });

  it('Can successfully enqueue multiple items into a queue', () =>{
    for(let i = 2; i < keyTwo.length; i++){
      Brady.enqueue(keyTwo[i]);
    }
    let current = Brady.top;
    console.log(current);

    for(let i = 0; i < keyTwo.length; i++){
      expect(current.data).toEqual(keyTwo[i]);
      current = current.next;
    }

  });
  
  
  it('Can successfully dequeue off of a queue the expected value', () =>{
    let goneBrady = Brady.dequeue();
    expect(goneBrady).toEqual('Greg');
    expect(Brady.top.data).toEqual('Marcia');
  });

  it('Can successfully peek into a queue, seeing the expected value', () =>{

    expect(Brady.peek()).toEqual('Marcia');
  });
  it('Can successfully empty a queue after multiple dequeues', () =>{
    for(let i = keyTwo.length-1; i >= 0; i--){
      Brady.dequeue();
    }
    expect(Brady.top).toEqual(null);
  });
  it('Can successfully instantiate an empty queue', () =>{
    let empty = new Pseudoqueue();
    expect(empty.top).toEqual(null);
  });

});

