'use strict';
function reverseAarray(arr){
  //define  an array
  let arrReverse=[]
  //run a for loop backwards through it
  for (let i=arr.length-1; i>=0; i--){
    //push from backwards location into new array
    arrReverse.push(arr[i])
  }
  //return array
  return arrReverse
}
