'use strict';
// CHALLENGE
// From CoderByte.com
// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 


function LetterChanges(str) { 
  let output = []
   for(let i=0; i<str.length; i++){
       let dec = str.charCodeAt(i);
       
       if (dec>=65 && dec<90){
           dec ++;
       } else if (dec === 90){
           dec = 65;
       } else if (dec>=97 && dec<122){
           dec ++;
       } else if (dec === 122){
           dec = 97;
       } 
       let l =String.fromCharCode(dec)
       if ( l === 'a' || l === 'e' || l === 'i' || l=== 'o' || l=== 'u' ){
           l= l.toUpperCase();
       }
       output.push(l)
   }
   return output.join('')
          
 }
    
 // keep this function call here 
 module.exports = LetterChanges;