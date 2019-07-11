'use strict';
// . (period) which matches any single character
// * (asterisk) which matches zero or more of the preceding element
// That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.

// For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.

// Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false


//function takes in regex and a string
function regexMatch( regex, string ){
  //steps to complete

  // iterate through the string's length & the regex's length

  let i = 0;
  let j = 0;
  let r = regex.split('')
  let s = string.split('')


  while ( i < r.length || j < s.length) {
    console.log(i,j)
    // else if you have two letters that match, iterate both by two
    if(r[i]=== s[j]){
      console.log('match')
      i++;
      j++;
    } else 
    // if you run into a period on the regex iterate both by one
    if(r[i] === '.'){
      console.log('period')
      i++;
      j++;
    } else
    // else if you run into a asterisk on the regex,  
    if(r[i]=== '*'){
      console.log('asterisk')
      // create a temp variable
      let temp 
      //if there is a next char in the regex
      
      if (r[i+1]){
        while( r[i+1] === '.' || r[i+1] === '*' ){
          i++
        }
      } else {
        j = s.length
      }
      
      while( j < s.length && s[j] !== temp ){
        j++
      }
      i++
    }
    else {
      return false
    }
  }

  if(i===r.length && j === s.length){
    return true
  } else {
    return false
  }
}

module.exports = regexMatch;