'use strict';
let commonCharacterCount = require('../commonCharacterCount.js');

let input1 = "abc";
let input2 = "a";
let input3 = "baddie";
let input4 = "daddy";
let input5 = "";
let input6 = "grinch";

let output1 = 1;
let output2 = 2;
let output3 = 3;
let output4 = 0;
let output5 = 0;
let output6 = 6;
let output7 = 0;
let output8 = 0;


describe('allLongestStrings Function', () => {

  it('Will find one common character', () => {
    expect(commonCharacterCount(input1,input2)).toEqual(output1)
  })
  it('Will pick up multiple common characters', () => {
    expect(commonCharacterCount(input1,input3)).toEqual(output2)
  })
  it('Will return the same if positions are swapped', () => {
    expect(commonCharacterCount(input3,input1)).toEqual(output2)
  })

  it('Will work with finding repeats', () => {
    expect(commonCharacterCount(input3,input4)).toEqual(output3)
  })
  it('Will work with empty string in spot 1', () => {
    expect(commonCharacterCount(input5,input2)).toEqual(output4)
  })
  it('Will work with empty string in spot 2', () => {
    expect(commonCharacterCount(input2,input5)).toEqual(output5)
  })
  it('Will return the length if they are exactly the same', () => {
    expect(commonCharacterCount(input3,input3)).toEqual(output6)
  })
  it('Will return 0 if none are the same', () => {
    expect(commonCharacterCount(input4,input6)).toEqual(output7)
  })
  it('Will return 0 for 2 empty strings', () => {
    expect(commonCharacterCount(input5,input5)).toEqual(output8)
  })
  
})