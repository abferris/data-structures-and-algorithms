'use strict';

//export

const shift = module.exports = {};

//initial function
shift.arrayshift = function (...inputs) {
  let newArr=[];
  const arr = inputs[0];
  const val = inputs[1];
  if (checktype(inputs)===null){return null;}
  const mid = Math.ceil(arr.length/2)-1;
  for (let i=0; i<arr.length; i++){
    if (i<mid){
      newArr[i]=arr[i];
    }
    if (i===mid){
      newArr[i]=arr[i];
      newArr[i+1]=val;
    }
    if (i>mid){
      newArr[i+1]=arr[i];
    }
    
  }
  return newArr;
};

//helper functions
function checktype(...inputs){
  if (!Array.isArray(inputs[0][0])){
    return null;
  }
  if(!inputs[0][1]){
    return null;
  }
  if(inputs[0].length>2){
    return null;
  }
}
