'use strict';

const QS = (arr, left=0, right=arr.length) => {
  if(left<right){
    const pos = part(arr, left, right);
    QS(arr, left, pos-1);
    QS(arr, pos+1, right);
  }
};

const part = (arr,left,right) => {
  
}

const merge = (a,b,out) => {

};
module.exports = {QS, merge};