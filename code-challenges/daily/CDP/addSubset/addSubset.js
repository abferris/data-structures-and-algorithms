'use strict';
//Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

// Integers can appear more than once in the list. You may assume all numbers in the list are positive.

// For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.
const S = [12, 1, 61, 5, 9, 2]
const k =  4



function addSubset( array , val, sub =[], s = 0, output = []){
  // check if subarray adds to value]
  let sum = sub.reduce( (acc, val) => acc+val, 0)

  //if so
  if (sum === val){
    //return the subarray
    return sub
  //otherwise if sum < value
  } else if (sum < val) {
    // iterate through the rest of the array
    for (let i = s; i< array.length; i++){
      //run it for with the subarray with the item

       let solution = addSubset(array, val, [...sub, array[i]], i+1, output) 
       if (solution){
         output.push(solution)
       }
    }
  }
  if (output.length > 0){
    return output
  } else {
    return null
  }
}


console.log(addSubset(S,k))

module.exports = addSubset