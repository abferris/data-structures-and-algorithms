'use strict';


const search = module.exports = {};


search.binarysearch = function(arr, key){
  // setting up start conditions
  let result =-1;
  let start = 0;
  let len = arr.length;
  while (len>0){
    // initial definition of half
    let half = len/2;
    if (arr[half+start]===key){
      result = half+start;
      break;
    }
    if(arr[half+start>key]){
      len-=half;
    }
    if(arr[half+start]<key){
      start+=half;
      len-=half;
    }
  }
  return result;
};