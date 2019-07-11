'use strict'
function Sort ( left, right ){
  let output = [];
  let i = 0;
  let j = 0;
  if(!right){
    return left
  }
  while ( i < left.length || j < right.length ){
    if ( !left[i] || left[i] >= right[j] ){
      output.push(right[j]);
      j++;
    } else if
    (!right[j] || right[j] > left[i] ){
      output.push( left[i] );
      i++
    }
  }
  return output
}

function mergeSorted ( list ){
  while ( list.length > 1 ){
    let newArr = []
    for ( let i = 0; i < list.length; i+=2 ){
      list[i] && list [i+1] ? newArr.push( Sort( list[i], list[i+1] ) ) : newArr.push(list[i])
    }
    list = newArr;
  }
  if (list.length < 1){
    return list
  } else {
    return list[0];
  }
}



module.exports = mergeSorted;