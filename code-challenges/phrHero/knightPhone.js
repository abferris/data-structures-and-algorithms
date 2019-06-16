function phoneNumber (start, jumps, output = 0){
  //create the adjacency map
   const neighbors = {
    '1': [6, 8],
    '2': [7, 9],
    '3': [4, 8],
    '4': [3, 9, 0],
    '5': [],
    '6': [1, 7, 0],
    '7': [2, 6],
    '8': [1, 3],
    '9': [2, 4],
    '0': [4, 6],
  };
  
  if (jumps === 0){
    console.log('complete')
    // output ++;
    return output +1;
  } else {
    let adj = neighbors[start];
    for ( let i = 0; i < adj.length; i++){
      output = phoneNumber(adj[i], jumps-1, output)
    }
  }
  return output;
}

module.exports = phoneNumber;