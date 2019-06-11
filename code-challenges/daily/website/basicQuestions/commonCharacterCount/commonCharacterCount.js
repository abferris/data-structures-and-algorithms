function commonCharacterCount(s1, s2) {
  let dict = {}
  for( let i=0; i< s1.length; i++){
      dict[s1[i]]? dict[s1[i]] ++ : dict[s1[i]] = 1;
  } 
  console.log(dict)
  let count = 0;
  
  for(let i=0; i< s2.length; i++){
      if (dict[s2[i]] > 0){
          count ++
          dict[s2[i]] --
      }
  }   
  return count
}

module.exports = commonCharacterCount