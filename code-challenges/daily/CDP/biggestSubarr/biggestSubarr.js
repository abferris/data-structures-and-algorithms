function highestSubArr(arr, l){
  let output = [];
  for( let i = 0; i < arr.length+1-l; i++){
    let highest;
    
    for( let j = 0; j < l; j++){
      if( !highest || highest < arr[i+j]){
        highest = arr[i+j]
      }
    }
    highest ? output.push(highest): 0;
  }
  return output
}

module.exports = highestSubArr