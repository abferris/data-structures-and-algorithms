'use strict';
//import
const linkedList = require('../linked-list.js');

//constants
const keyOne = null;
const keyTwo = 'Cool J';
const keyThree = 'Stylish';
const keyFour = 'ama';
const keyFive = 'LOL';


//tests
describe('linked list module insert test', () =>{
  
  it('Should not add value to head if input is null', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyOne);
    expect(newLL.head).toEqual(null);
  });

  it('Should have the head value equal to `Cool J` after first insertion', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);

    expect(newLL.head.val).toEqual('Cool J');
  });

  it('Should have the second node value equal to `Cool J` after second insertion', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    expect(newLL.head.next.val).toEqual('Cool J');
  });

});

describe('linked list module includes method', () =>{
 


  it('should return false if length is 0', () => {
    let newLL = new linkedList.LinkedList();
    expect(newLL.includes('Cool J')).toEqual(false);
  });

  it('Should return true if Value is in array', () => {
    let newLL = new linkedList.LinkedList();

    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    newLL.insert(keyFour);
    newLL.insert(keyFive);
    expect(newLL.includes('Cool J')).toEqual(true);
  });
  
  it('Should return false if key is not in array', () => {
    let newLL = new linkedList.LinkedList();
    expect(newLL.includes(5)).toEqual(false);
  });
});

describe('linked list module print method ', () => {
  it('should print [] with no values', () => {
    let newLL = new linkedList.LinkedList();
    expect(newLL.print()).toEqual([]);
  });

  it('should return [Stylish, Cool J] with 2 values', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    expect(newLL.print()).toEqual(['Stylish', 'Cool J']);
  });


  it('should return [LOL, ama, Stylish, Cool J] with 4 values', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    newLL.insert(keyFour);
    newLL.insert(keyFive);
    expect(newLL.print()).toEqual(['LOL', 'ama', 'Stylish', 'Cool J']);
  });
});