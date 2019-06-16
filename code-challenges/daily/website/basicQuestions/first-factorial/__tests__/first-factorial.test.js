'use strict';
let FirstFactorial = require('../first-factorial.js');

describe('FirstFactorial Function', () => {

  it('Will run a basic factorial', () => {
    expect(FirstFactorial(4)).toEqual(24)
  })

  it('will do larger factorials', () => {
    expect(FirstFactorial(12)).toEqual(479001600
      )
  })

  it('will return 0 for a input of 0', () => {
    expect(FirstFactorial(0)).toEqual(0)
  })

  it('will return 1 for an input of 1', () => {
    expect(FirstFactorial(1)).toEqual(1)
  })
  
})