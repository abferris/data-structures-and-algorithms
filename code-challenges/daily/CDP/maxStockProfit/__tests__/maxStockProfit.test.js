let maxProfit = require('../maxStockProfit.js')

describe('maxProfit Function', () =>{

  it('will handle only one value with a 0 profit', () =>{
    expect(maxProfit([1])).toEqual(0)
  })
  it('will identify an increase', () =>{
    expect(maxProfit([1,2])).toEqual(1)
  })

  it('will work over an increase of multiple values', () =>{
    expect(maxProfit([1,2,5])).toEqual(4)
  })  

  it('will identify when there is no increase with a 0', () =>{
    expect(maxProfit([5,2,1])).toEqual(0)
  })

  it('will identify an increase  after a dip', () =>{
    expect(maxProfit([5,1,2])).toEqual(1)
  })


  it('will identify an increase over a dip', () =>{
    expect(maxProfit([1,5,2,6])).toEqual(5)
  })


  it('will identify an increase when after the dip is better than before the dip', () =>{
    expect(maxProfit([3,5,2,6])).toEqual(4)
  })

})