'use strict';

const longestPalindrome = require("../longestPalindrome.js")

describe('longest palindrome function will',() => {
  
  it('return 1 for a string length of 1',() => {
    expect( longestPalindrome( 'a' ) ).toEqual( 1 )
  })
  
  it('will return 1 if there are no palindromes inside',() => {
    expect( longestPalindrome( 'abc' ) ).toEqual( 1 )
  })
  
  it('will recognize 2 in a row',() => {
    expect( longestPalindrome( 'abbc' ) ).toEqual( 2 )
  })
  
  it('will recognize palindrom of odd length',() => {
    expect( longestPalindrome( 'azbzc' ) ).toEqual( 3 )
  })
  
  it('will recognize palindrome of even length',() => {
    expect( longestPalindrome( 'azbbzc' ) ).toEqual( 4 )
  })
  
  it('will recognize the longer palindrome',() => {
    expect( longestPalindrome( 'azbbzcccz' ) ).toEqual( 5 )
  })
  
  it('will go all the way out to the largest extent of the palindrome',() => {
    expect( longestPalindrome( 'abcdedcba' ) ).toEqual( 9 )
  })
  
  it('will return 0 for an  empty input',() => {
    expect( longestPalindrome(  ) ).toEqual( 0 )
  })

  it('will return 0 for an incorrect empty input',() => {
    expect( longestPalindrome( 1 ) ).toEqual( 0 )
  })

})