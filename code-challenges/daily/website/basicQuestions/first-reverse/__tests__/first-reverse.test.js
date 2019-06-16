'use strict';
let FirstReverse = require('../first-reverse.js')

describe('FirstReverse Function', () => {

  it('will reverse letters', () => {
    expect(FirstReverse('abcABC')).toEqual('CBAcba')
  })

  it('will do spaces and other non-letters', () => {
    expect(FirstReverse('a/b c#A$B%C')).toEqual('C%B$A#c b/a')
  })

  it('will return an empty string for an empty string', () => {
    expect(FirstReverse('')).toEqual('')
  })

  it('will pass the coderByte test', () => {
    expect(FirstReverse('Hello World and Coders')).toEqual('sredoC dna dlroW olleH')
  })
  
})