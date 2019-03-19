'use strict';
function reverseAarray(arr){
  let arrReverse=[]
  for (let i=arr.length-1; i>=0; i--){
    arrReverse.push(arr[i])
  }
  return arrReverse
}
