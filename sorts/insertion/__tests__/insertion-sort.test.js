'use strict';

let sort = require('../insertion-sort.js').sort;

let generateArr = (array) => {
  for(let i = 1; i < 10; i++) {
    array.push(Math.floor(Math.random()*100-50));
  }
};

let isSorted = (array) => {
  for(let i = 1; i < array.length; i++){
    if( array[i] < array[i-1]){
      return false;
    }
  }
  return true;
};

let test1 = [];
generateArr(test1);
console.log(test1);
console.log(sort(test1));
let test2 = [1,2,3,4,5,6,7,8,9,10];
let test3 = [10,9,8,7,6,5,4,3,2,1];
let test4 = [];
let test5 = [5];

describe('Insertion sort test', () => {
  it('will sort A randomly generated unsorted array', () => {
    expect(isSorted(sort(test1))).toEqual(true);
  });
});
describe('Insertion sort test', () => {
  it('will return the same array if it is already sorted', () => {
    expect(sort(test2)).toEqual(test2);
  });
});
describe('Insertion sort test', () => {
  it('will sort a backwards-sorted array', () => {
    expect(sort(test3)).toEqual(test2);
  });
});
describe('Insertion sort test', () => {
  it('will return an empty array if input an empty array', () => {
    expect(sort(test4)).toEqual(test4);
  });
});
describe('Insertion sort test', () => {
  it('will return the same array if the array has one element', () => {
    expect(sort(test5)).toEqual(test5);
  });
});
