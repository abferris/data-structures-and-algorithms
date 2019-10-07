'use strict';

const mergeSort = (arr) => {
  let n = arr.length;
  if( n>1 ){
    let mid = Math.floor(n/2);
    let halfOne = arr.slice(0,mid);
    let halfTwo = arr.slice(mid, arr.length);
    mergeSort(halfOne);
    mergeSort(halfTwo);
    merge(halfOne, halfTwo,arr);
  }
  return arr;
};

const merge = (a,b,out) => {

  let i = 0;
  let j = 0;
  let k = 0;
  while( i < a.length && j < b.length){
    if( a[i] < b[j]){
      out[k] = a[i];
      i++;
    }
    else{
      out[k] = b[j];
      j++;
    }
    k++;
  }

  if (i === a.length){
    while(j<b.length){
      out[k] = b[j];
      k++;
      j++;
    }
  }
  if (j === b.length){
    while(i<a.length){
      out[k] = a[i];
      k++;
      i++;
    }
  }
  console.log(a,b,out);
  return out;
  
};
module.exports = {mergeSort, merge};