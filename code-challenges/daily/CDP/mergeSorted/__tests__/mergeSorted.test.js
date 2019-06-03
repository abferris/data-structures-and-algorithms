'use strict';
let mergeSorted = require('../mergeSorted.js');

let test1 = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
let result1 = [1,2,3,4,5,6,7,8,9,10,11,12];
let test2 = [[1],[5,6,8,10,12],[2,3,4,7,9,11]];
let result2 = result1;
let test3 = [[4,5,6,7],[],[1,2,3,8,9],[],[10,11,12]];
let result3 = result1;
let test4 = [[1],[2],[3],[4]];
let result4 = [1,2,3,4];
let test5 = [[],[],[]];
let result5 = [];
let test6 = [];
let result6 = result5;
let test7 = [[1],[1],[1],[1],[1],[1],[1]]
let result7 = [1,1,1,1,1,1,1];


describe('mergeSorted Function', () => {

  it('will merge a sorted list of arrays', () => {
    expect(mergeSorted(test1)).toEqual(result1)
  })

  it('Will work for varying array sizes', () => {
    expect(mergeSorted(test2)).toEqual(result2)
  })

  it('will deal with individual empty arrays interspersed', () => {
    expect(mergeSorted(test3)).toEqual(result3)
  })

  it('Will deal with all elements of size 1', () => {
    expect(mergeSorted(test4)).toEqual(result4)
  })

  it('Will return an empty array if all of its elements are empty', () => {
    expect(mergeSorted(test5)).toEqual(result5)
  })

    
  it('Will return an empty array if given an empty array', () => {
    expect(mergeSorted(test6)).toEqual(result6)
  })

  it('Will deal with repeats correctly', () => {
    expect(mergeSorted(test7)).toEqual(result7)
  })

})