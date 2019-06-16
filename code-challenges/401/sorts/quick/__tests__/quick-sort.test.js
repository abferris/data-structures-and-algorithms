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

describe('POL', () => {
  it('is alive', () => {
    expect(true).toBeTruthy();
  });
});

