'use strict';

let sort = require('../quick-sort.js').mergeSort;
let merge = require('../quick-sort.js').merge;

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
const test2 = [1,2,3,4,5,6,7,8,9,10];
const test3 = [10,9,8,7,6,5,4,3,2,1];
const test4 = [];
const test5 = [4];

const testMerge1 = [2,4,6];
const testMerge2 = [1,3,5];
const testMerge3 = [4,6];

describe('Merge function', () =>{
  let merged = merge(testMerge1,testMerge2,[]);
  it('will merge 2 unsorted arrays', () => {
    expect(merged).toEqual([1,2,3,4,5,6]);
  });
  
  it('will merge 2 different length arrays', () => {
    expect(merge(testMerge3, testMerge2, [])).toEqual([1,3,4,5,6]);
  });
});

describe('Merge sort test', () => {
  it('will sort A randomly generated unsorted array', () => {
    expect(isSorted(sort(test1))).toEqual(true);
  });

  it('will return the same array if it is already sorted', () => {
    expect(sort(test2)).toEqual(test2);
  });

  it('will sort a backwards-sorted array', () => {
    expect(sort(test3)).toEqual(test2);
  });

  it('will return an empty array if input an empty array', () => {
    expect(sort(test4)).toEqual(test4);
  });

  it('will return the same array if the array has one element', () => {
    expect(sort(test5)).toEqual(test5);
  });
});
