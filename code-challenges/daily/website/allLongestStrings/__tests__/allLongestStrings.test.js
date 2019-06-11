'use strict';
let allLongestStrings = require('../allLongestStrings.js');

let test1 = ["a", "bb", "ccc"]
let return1 = ["ccc"]
let test2 =  ["a", "aa", "bb", "cc"]
let return2 = ["aa", "bb", "cc"]
let test3 = ["a", "b", "c", "d"]
let return3 = ["a", "b", "c", "d"]
let test4 = [];
let return4 = [];
let test5 = ["a"]
let return5 = ["a"]

describe('allLongestStrings Function', () => {

  it('Will pick the longest string', () => {
    expect(allLongestStrings(test1)).toEqual(return1)
  })
  it('Will pick the will return multiple of the longest sting', () => {
    expect(allLongestStrings(test2)).toEqual(return2)
  })
  it('Will work with all string of same length', () => {
    expect(allLongestStrings(test3)).toEqual(return3)
  })
  it('Will handle an empty array', () => {
    expect(allLongestStrings(test4)).toEqual(return4)
  })
  it('Will handle one element in the array', () => {
    expect(allLongestStrings(test5)).toEqual(return5)
  })
  
})