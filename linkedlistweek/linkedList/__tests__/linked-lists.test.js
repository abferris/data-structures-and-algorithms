'use strict';
//import
const linkedList = require('../linked-list.js');
const merge = require('../llmerge.js');

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


describe('linked list module append method ', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    newLL.append(keyFour);
    expect(newLL.print()).toEqual(['Stylish', 'Cool J', 'ama']);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.append(keyThree);
    newLL.append(keyFour);
    newLL.append(keyFive);

    expect(newLL.print()).toEqual(['Cool J', 'Stylish', 'ama', 'LOL']);
  });
});


describe('Insert Before and After Modules', () => {
  it('Can successfully insert a node before a node located in the middle of a linked list ', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    newLL.insertBefore(keyTwo, keyFour);    

    expect(newLL.print()).toEqual(['Stylish', 'ama', 'Cool J']);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    newLL.insertBefore( keyThree, keyFour);
    expect(newLL.print()).toEqual(['ama', 'Stylish', 'Cool J']);
  });


  it('Can successfully insert after a node in the middle of the linked list', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    newLL.insertAfter(keyThree, keyFour);
    expect(newLL.print()).toEqual(['Stylish', 'ama', 'Cool J']);
  });
 
  it('Can successfully insert a node after the last node of the linked list', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    newLL.insert(keyThree);
    newLL.insertAfter(keyTwo, keyFour);
    expect(newLL.print()).toEqual(['Stylish', 'Cool J', 'ama']);  
  });

});



describe('kth from the end module', () => {
  let baseLL = new linkedList.LinkedList();
  baseLL.insert(keyTwo);
  baseLL.insert(keyThree);
  baseLL.insert(keyFour);
  baseLL.insert(keyFive);

  it('Where K is greater than the length of the list ', () => {
    expect(baseLL.kthFromEnd(5)).toEqual(null);
  });

  it('Where k and the length of the list are the same', () => {
    expect(baseLL.kthFromEnd(4)).toEqual('LOL');
  });

  it('Where k is not a positive integer', () => {
    expect(baseLL.kthFromEnd(-1)).toEqual(null);
  });
 
  it('Where the linked list is of a size 1', () => {
    let newLL = new linkedList.LinkedList();
    newLL.insert(keyTwo);
    console.log(newLL.head.next, newLL);
    expect(newLL.kthFromEnd(1)).toEqual('Cool J');  
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(baseLL.kthFromEnd(2)).toEqual('Stylish');  
  });

  describe('merge module. will do insertions', () => {
    let lla = new linkedList.LinkedList();
    lla.insert(4);
    lla.insert(3);
    lla.insert(2);
    lla.insert(1);

    let llb = new linkedList.LinkedList();
    llb.insert(7);
    llb.insert(6);
    llb.insert(5);
  
    xit('llb.length = lla.length ', () => {
 
      let llc= merge(lla);
    
      expect(llc).toEqual([1,1,2,2,3,3,4,4]);
    });
  
    // it('llb.length > lla.length', () => {
    //   expect(baseLL.kthFromEnd(4)).toEqual('LOL');
    // });
  
    // it('lla.length > llb.length', () => {
    //   expect(baseLL.kthFromEnd(-1)).toEqual(null);
    // });
  
    // it('Where one linked does not exist', () => {
    //   let newLL = new linkedList.LinkedList();
    //   newLL.insert(keyTwo);
    //   expect(newLL.kthFromEnd(1).toEqual('Cool J'));  
    // });
  });
  
});