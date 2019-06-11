'use strict';
let LetterChange = require('../letter-change.js')

describe('LetterChange Function', () => {

  it('will change letters', () => {
    expect(LetterChange('abcABC')).toEqual('bcdBCD')
  })

  it('will ignore spaces and other non-letters', () => {
    expect(LetterChange('a/b c#A$B%C')).toEqual('b/c d#B$C%D')
  })

  it('will turn anything that is a z into an a', () => {
    expect(LetterChange('zZ')).toEqual('AA')
  })

  it('will capitolize all ending vowels', () => {
    expect(LetterChange('zZdDhHnNtT')).toEqual('AAEEIIOOUU')
  })
  it('will pass the coderByte test', () => {
    expect(LetterChange('a confusing /:sentence:/[ this is not!!!!!!!~')).toEqual('b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~')
  })
  
})