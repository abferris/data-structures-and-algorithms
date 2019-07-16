// Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.


//solution efficiencey:
//Time: O(n) 
// Space O(1)? only creates min, current and profit as single numbers. not N space.

function maxProfit(array){
let profit = 0;
let min;
let current
  for(let i = 0; i <array.length; i++){
    //if there is no minimum or the value of array at i is less than minimum
    if(!min || array[i] < min){
      //reset minimum
      min = array[i];
    }
    // current is redefined every move
    current = array[i];
    //if the current minus minimum is more than the max profit defined before, then profit is redefined
    if (current-min > profit){
      profit = current-min
    }
  }  
  return profit
}

module.exports = maxProfit;