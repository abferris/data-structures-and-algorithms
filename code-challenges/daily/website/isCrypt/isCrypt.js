function isCryptSolution(crypt, solution) {
  
  // create dictionary for first letters and all letters set standard result to be true

  let keys = {}
  solution.forEach(key => keys[key[0]] = key[1])
  
  let mapped = crypt.map( str =>{
    let splitStr = str.split('');
    return splitStr.map( letter => keys[letter])
  } )
  
  // checking for first letter falses
  for (let i = 0; i<mapped.length; i++){
    let firstLetter = mapped[i][0];
    let allZeros = true;
    for (let j = 0; j < mapped[i].length; j++){
      if(parseInt(mapped[i][j]) === NaN ){
        return false
      }
      if (mapped[i][j] !== '0'){
        allZeros = false;
        
      }
    }
    if (firstLetter === '0' && mapped[i].length !== 1){
      
      return false
    }  
  }
  
  for (let i = 0; i < mapped.length; i++){
     mapped[i] =parseInt(mapped[i].join('')) 
  }
  
  let sum = mapped[0]+mapped[1]
  
  if (sum === mapped[2]){
    return true
  } else {
    return false
  }
  
}

module.exports = isCrypSolution;