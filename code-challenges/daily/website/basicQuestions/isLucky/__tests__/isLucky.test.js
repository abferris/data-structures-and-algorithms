'use strict';
let isLucky = require('../isLucky.js.js');
//it is assumed that there are no negative numbers in this lucky input
let test1 = 1230
let return1 = true
let test2 =  12330;
let return2 = true
let test3 = 10
let return3 = false
let test4 = 1
let return4 = true
let test5 = 1234567
let return5 = false
let test6 = 12345678987654321
let return6 = false;
let test7 = 0
let return7 = true;

describe('isLucky Function', () => {

  it('Will Recognize a lucky number', () => {
    expect(isLucky(test1)).toEqual(return1)
  })
  it('Will handle a number with an odd number of digits', () => {
    expect(isLucky(test2)).toEqual(return2)
  })
  it('Will recognize an unlucky number', () => {
    expect(isLucky(test3)).toEqual(return3)
  })
  it('Will handle a single digit number', () => {
    expect(isLucky(test4)).toEqual(return4)
  })
  it('will handle a longer unlucky number', () => {
    expect(isLucky(test5)).toEqual(return5)
  })
  it('will handle a long lucky number', () => {
    expect(isLucky(test6)).toEqual(return6)
  })
  it('will handle 0', () => {
    expect(isLucky(test7)).toEqual(return7)
  })
  
})