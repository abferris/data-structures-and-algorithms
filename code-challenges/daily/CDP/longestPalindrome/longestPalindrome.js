'use strict';
// Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

// For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".

// it is assumed that spaces count

function longestPalindrome(string){
  if(!string || typeof(string)!== 'string'){
    return 0
  }
  let longest = 0;
  for(let i = 0; i < string.length; i++){
    // console.log('initial', string[i])
    let start = i;
    let end = i;
    if(string[i+1]===string[i] && string[i+1]!==string[i-1]){
      // console.log('next is same', string[start], string[end])
      start = i;
      end =  i+1;
    } 
    while(string[start-1] && string[end+1] && string[start-1]===string[end+1]){
      // console.log('both sides are same', string[start], string[end], 'length', end-start+1 )
      start--;
      end++
    }
    if(end-start+1 > longest){
      longest = end-start +1
      // console.log('change longest', end, start)
    }
  }
  return longest
}

module.exports = longestPalindrome