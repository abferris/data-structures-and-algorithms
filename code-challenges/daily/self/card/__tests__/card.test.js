'use strict'
//Testing the card
const Card = require("../card.js");


const goodSuite=0;
const goodNumber=5; 
const stringInput = "test";
const objInput = {};
const arrayInput = [];
describe('Card Object', () => {
  
  it('will create a card with a number and a suite', () => {
    let testNum1 = 2+Math.floor(Math.random()*13);
    let testSuite1 = Math.floor(Math.random()*4);
    let test1= new Card(testNum1,testSuite1);
    expect(test1.number).toEqual(testNum1);
    expect(test1.suite).toEqual(testSuite1);
  }) ;
  
  it('will reject a card with a number that is not an integer between 2 and 14', () => {
    let testNum2 = 0;
    let testNum3 = 20
    let testNum4 = 3.14159
    expect(new Card(testNum2,goodNumber)).toEqual({})
    expect(new Card(testNum3,goodNumber)).toEqual({})
    expect(new Card(testNum4,goodNumber)).toEqual({})
  }) 

  it('will reject a card with a number with inappropriate input type', () => {
    expect(new Card(objInput,goodNumber)).toEqual({})
    expect(new Card(arrayInput,goodNumber)).toEqual({})
    expect(new Card(stringInput,goodNumber)).toEqual({})
  }) 

  it('will reject a card that has an invalid suite', () => {
    let testNum5 = -1;
    let testNum3 = 20;
    let testNum6 = 3.14159/2;
    expect(new Card(goodSuite,testNum3)).toEqual({});
    expect(new Card(goodSuite,testNum5)).toEqual({});
    expect(new Card(goodSuite,testNum6)).toEqual({});
  })

  it('will reject a card with a suite with inappropriate input type', () => {
    expect(new Card(goodSuite, objInput)).toEqual({})
    expect(new Card(goodSuite, arrayInput)).toEqual({})
    expect(new Card(goodSuite, stringInput)).toEqual({})  }) 
})