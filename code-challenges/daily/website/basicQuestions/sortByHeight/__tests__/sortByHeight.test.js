'use strict';
let sortByHeight = require('../sortByHeight.js');
//-1 represents trees. Trees do not move. Move everything but the trees so they are sorted.
let test1 = [150,190,170]
let return1 = [150,170,190]
let test2 =  [110,120,890]
let return2 = [110,120,890]
let test3 = [-1, 150, 190, 170, -1, -1, 160, 180]
let return3 = [-1, 150, 160, 170, -1, -1, 180, 190]

let test4 =  [-1,-1,110,120,-1,890,-1]
let return4 = [-1,-1,110,120,-1,890,-1]
let test5 = [-1,-1,-1,-1]
let return5 = [-1,-1,-1,-1]
let test6 = [50]
let return6 = [50]
let test7 = [-1,-1,50,-1,-1]
let return7 = [-1,-1,50,-1,-1]
let test8=[]
let return8 = []


describe('sortByHeight Function', () => {

  it('Will sort people', () => {
    expect(sortByHeight(test1)).toEqual(return1)
  })
  it('Will not change if people are sorted', () => {
    expect(sortByHeight(test2)).toEqual(return2)
  })
  it('Will sort people with trees', () => {
    expect(sortByHeight(test3)).toEqual(return3)
  })
  it('Will not change if people are sorted with trees', () => {
    expect(sortByHeight(test4)).toEqual(return4)
  })
  it('Will not change if only trees', () => {
    expect(sortByHeight(test5)).toEqual(return5)
  })
  it('Will not change if sorting 1 person', () => {
    expect(sortByHeight(test6)).toEqual(return6)
  })
  it('Will not change if sorting 1 person with trees', () => {
    expect(sortByHeight(test7)).toEqual(return7)
  })
  it('Will not change if sorting nothing', () => {
    expect(sortByHeight(test8)).toEqual(return8)
  })
  
})