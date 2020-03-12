'use strict';
let gradingStudents = require('../gradingStudents.js').gradingStudents;
let round = require('../gradingStudents.js').round;

const test = [4,73,67,38,33]
const output = [75,67,40,33]
const wronglength = [4,73,67,38]
const wrongInput = 'a'



describe('Round function', () =>{
  it('will ignore anything 37 and below', () => {
    expect(round(test[4])).toEqual(test[4])
  })
  it('will round up numbers higher than 37 that are 2 away a multiple of 5', () => {
    expect(round(test[1])).toEqual(75)
  })
  it('will ignore anything more than 40 with a difference of more than 2 below a multiple of 5', () => {
    console.log(test[2])
    expect(round(test[2])).toEqual(test[2])
  })
  it('will return Improper input when the input is not a number',() =>{
    expect(round(wrongInput)).toEqual('Improper input')
  })
})

describe('gradingStudents function', () =>{
  it('will take in the proper input and give back the output without the front number', () => {
    expect(gradingStudents(test)).toEqual(output)
  })

  it('Will recognize when the length is off and return a message saying so', () => {
    expect(gradingStudents(wronglength)).toEqual('Improper amount of inputs found')
  })

  it('Will recognize when the imput is not an array return a message saying so', () => {
    expect(gradingStudents(wrongInput)).toEqual('Improper input')

  })

})