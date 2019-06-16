'use strict';

const QS = (arr, left = 0, right = arr.length-1) => {
  if(left<right){
    const pos = part(arr, left, right);
    QS(arr, left, pos-1);
    QS(arr, pos+1, right);
  }
};

const part = (arr,left,right) => {
  const pivot = arr[right];
  let low = left-1;
  for(let i = 0; i<right; i++){ 
    if (arr[i] <= pivot ) {
      low++;
      swap(arr, i, low);
    }
  }
  low++;
  swap(arr, right, low);
  return low;
};

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};


module.exports = {QS, part, swap};