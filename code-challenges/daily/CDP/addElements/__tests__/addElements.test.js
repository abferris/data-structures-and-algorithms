'use strict';
let addElements = require('../addElements.js');

const arr = [1,2,3,4,4,10];
 const num1 = 5;
 const num2 = 6;
 const num3 = 8;
 const num4 = 9;
 const num5 = 10;
 const num6 = 20;


describe('addElements Function', () => {

  it('Will return true when multiple options work', () => {
    expect(addElements(arr, num1)).toEqual(true)
  })

  it('Will return true when 1 option works', () => {
    expect(addElements(arr, num2)).toEqual(true)
  })

  it('Will return true when it adds a repeat of the same number', () => {
    expect(addElements(arr, num3)).toEqual(true)
  })

  it('Will return false if they do not add', () => {
    expect(addElements(arr, num4)).toEqual(false)
  })

  it('Will return false only one can make it', () => {
    expect(addElements(arr, num5)).toEqual(false)
  })

    
  it('Will return false if one adds with itslef', () => {
    expect(addElements(arr, num6)).toEqual(false)
  })

  
})