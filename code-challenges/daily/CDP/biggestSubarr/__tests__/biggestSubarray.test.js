'use strict'

const biggestSub = require("../biggestSubarr.js");

let arr1 = [1,5,2,6,3]
let arr2 = [6,6,7,7,6,6,7,7,8]



describe('biggestSubarray Function', () => {

  it('Will return the same array if second value is 1', () => {
    expect(biggestSub(arr1, 1)).toEqual(arr1)
  })

  it('Will return a changed array when second value is 2. Length will be 1 less', () => {
    expect(biggestSub(arr1, 2)).toEqual([5,5,6,6])
  })

  it('Will handle looking at 3 values', () => {
    expect(biggestSub(arr1, 3)).toEqual([5,6,6])
  })

  it('Will return an empty array if length is 0', () => {
    expect(biggestSub(arr1, 0)).toEqual([])
  })
  
  it('Will handle multiple of the same highest', () => {
    expect(biggestSub(arr2, 4)).toEqual([7,7,7,7,7,8])
  }) 

})