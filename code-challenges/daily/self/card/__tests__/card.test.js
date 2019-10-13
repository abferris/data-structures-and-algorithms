'use strict'
//Testing the card
const Card = require("../card.js");



describe('Card Object', () => {
  
  it('will create a card with a number and a suite', () => {

    expect(biggestSub(arr2, 4)).toEqual([7,7,7,7,7,8])
  }) 
  
  it('will reject a card with a number that is not an integer between 2 and 14', () => {
    expect(biggestSub(arr2, 4)).toEqual([7,7,7,7,7,8])
  }) 

  it('will reject a card with a number with inappropriate input type', () => {
    expect(biggestSub(arr2, 4)).toEqual([7,7,7,7,7,8])
  }) 
  it('will reject a card that has an invalid suite', () => {
    expect(biggestSub(arr2, 4)).toEqual([7,7,7,7,7,8])
  }) 
  it('will reject a card with a suite with inappropriate input type', () => {
    expect(biggestSub(arr2, 4)).toEqual([7,7,7,7,7,8])
  }) 
})