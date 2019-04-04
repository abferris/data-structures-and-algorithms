'use strict';
// imports
const Stack = require('../multi-bracket-validation.js').Stack;
const validate = require('../multi-bracket-validation.js').bracketValidator;
//NOTES ON QUEUES AND STACKS FOR READER! I understand I am iterating through the queue to test it, even though I am not supposed to in general.
//After i wrote this, i had a LONG conversation with Benicio (night teacher) about this
// const testing stuff
const testOne = `()`;
const testTwo = `(){}[]`;
const testThree = `{()}`;
const testFour = `(words)`;
const testFive = `words`;
const testSix = `]`;
const testSeven= `{`;
const testEight =`{]`;
const testNine = `[(])`;
//tests
describe('Multi Bracket Validation module - happy tests @:^)', () => {
  it('Will return true for a single set of brackets', () =>{
    expect(validate(testOne)).toEqual(true);
  });
  it('Will return true for multiple sets of brackets', () =>{
    expect(validate(testTwo)).toEqual(true);
  });
  it('Will return true for a single set of brackets', () =>{
    expect(validate(testThree)).toEqual(true);
  });
  it('Will return true for a single set of brackets', () =>{
    expect(validate(testFour)).toEqual(true);
  });
  it('Will return true for a single set of brackets', () =>{
    expect(validate(testFive)).toEqual(true);
  });
 
});
describe('Multi Bracket Validation module - unhappy tests TT_TT ', () => {
  it('Will return false for an unclosed closing bracket', () =>{
    expect(validate(testSix)).toEqual(false);
  });
  it('Will return false for an unclosed opening bracket', () =>{
    expect(validate(testSeven)).toEqual(false);
  });
  it('Will return falsed with wrong closing bracket', () =>{
    expect(validate(testEight)).toEqual(false);
  });
  it('Will return false for offset brackets', () =>{
    expect(validate(testNine)).toEqual(false);
  });

});

