function firstNotRepeatingCharacter(s) {
  let dict = {};
  let out = 0;
  for (let i = 0; i < s.length; i++){
   dict[s[i]] ? dict[s[i]]+=1 : dict[s[i]] = 1;
   while ( dict[s[out]] > 1 ) {
    out++;
   }
  }
  if (s[out]){
   return s[out]
  } else {
   return '_'
  }
 }

 module.exports = firstNotRepeatingCharacter