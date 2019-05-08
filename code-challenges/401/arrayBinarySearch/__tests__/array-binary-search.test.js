'use strict';
//import
const search = require('../array-binary-search');
//constants
const baseArray = [2,5,6,8,20,46,73,122,467];
const keyOne = 8;
const keyTwo = 467;
const keyThree = 55;
const keyFour = 1;
//tests
describe('array binary search module', () =>{
  const biSearch = search.binarysearch;
  xit('should find key in first half', () => {
    expect(biSearch(baseArray, keyOne)).toEqual([3]);
  });
  xit('should find key in second half', () => {
    expect(biSearch(baseArray, keyTwo)).toEqual([8]);
  });
  xit('should find key in first half', () => {
    expect(biSearch(baseArray, keyThree)).toEqual([-1]);
  });
  xit('should find key in first half', () => {
    expect(biSearch(baseArray, keyFour)).toEqual([-1]);
  });
  
});