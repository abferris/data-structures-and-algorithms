function isLucky(n) {
  let nums = n.toString().split('').map( numb => parseInt(numb))
  let i = 0;
  let isBalanced = 0;
  while( i<Math.floor(nums.length/2)){
      isBalanced+= nums[i]
      isBalanced-= nums[nums.length-1-i]
      i++
  }
  if(isBalanced===0) {
      return true
  }   else {
      return false
  }
}

module.exports = isLucky