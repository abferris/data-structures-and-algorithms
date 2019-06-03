'use strict';

function addElements (arr, num) {
  const dict = {};
  for (let i = 0; i < arr.length; i++){
    let temp = num - arr[i];
    if (dict[temp]){
      return true
    }
    dict[arr[i]] = true;
  }
  return false
}

module.exports = addElements