'use strict';
//import
const shift = require('../array-shift.js');

let obj = {Billy: 8, Chris: 1};
let string = 'Erin';
let number = 2;
let arrOne = [3];
let baseOne = [3,1,4,5];
let baseTwo = [3,1,4,5,9];


//test start
describe('Array Shift Module',() =>{
  let insert = shift.arrayshift;
  //success tests
  it('Should insert in middle of Array', () => {
    expect(insert(baseOne, number)).toEqual([3,1,2,4,5]);
  });

  it('Should insert after middle value if odd', () => {
    expect(insert(baseTwo, string)).toEqual([3,1,4,'Erin',5,9]);
  });

  it('Should be able to insert object', () => {
    expect(insert(baseOne, obj )).toEqual([3,1,{Billy: 8, Chris: 1},4,5]);
  });

  it('Can insert Array in the middle of an array, and will be its own array', () => {
    expect(insert(baseOne, baseTwo )).toEqual([3,1,[3,1,4,5,9],4,5]);
  });

  it('Will insert after if Array length is one', () => {
    expect(insert(arrOne, string)).toEqual([3,'Erin']);
  });
  //fail tests
  it('Will fail if array input is not an array 1', () => {
    expect(insert(number, string)).toEqual(null);
  });

  it('Will fail if array input is not an array 2', () => {
    expect(insert(obj, number)).toEqual(null);
  });

  it('Will fail if too many inputs', () => {
    expect(insert(arrOne, number, string)).toEqual(null);
  });
  
  it('Will fail if value input is empty', () => {
    expect(insert(arrOne)).toEqual(null);
  });

});