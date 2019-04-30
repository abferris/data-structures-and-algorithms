'use strict';

const repeat = require('../repeatWord.js').repeats;
const test1 = 'A is repeated A';
const key1 = 'a';
const test2 = 'There is two repeated words, and two are there';
const key2 = 'two';
const test3 = 'There, there little one. Do not worry your head over the matter';
const key3 = 'there';
const test4 = 'What? I have no idea what you are doing.';
const key4 = 'what';

const wrongkey = null;
const test5 = 'There are no repeats on me!';
const test6 = ['This', 'shouldn\'t', 'work', 'should', 'this'];
const test7 = '';
const test8 = 'what';



describe('Repeat function', () => {
  
  it('will return a repeated word', () => {
    expect(repeat(test1)).toEqual(key1);
  });

  it('will return the first repeated word', () => {
    expect(repeat(test2)).toEqual(key2);

  });

  it('will return for two of the same word differently capitolized', () => {
    expect(repeat(test3)).toEqual(key3);

  });

  it('will return a repeated word adjacent to punctuation', () => {
    expect(repeat(test4)).toEqual(key4);

  });

  it('will return null if there is no repeated word', () => {
    expect(repeat(test5)).toEqual(wrongkey);
  });

  it('will return null for an incorrect input', () => {
    expect(repeat(test6)).toEqual(wrongkey);
  });

  it('will return null for an empty input', () => {
    expect(repeat(test7)).toEqual(wrongkey);
  });

  it('will return null for a single word  input', () => {
    expect(repeat(test8)).toEqual(wrongkey);
  });


});