'use strict'

let LL = require('../../../../401/linkedlistweek/linkedList/linked-list.js').LinkedList
let intersection = require ('../LLintersection.js')

let L1 = new LL
L1.append(5)
L1.append(1)
L1.append(3)
L1.append(2)
L1.append(6)
L1.append(7)
L1.append(8)

let L2 = new LL
L2.append(6)
L2.append(7)
L2.append(8)

let L3 = new LL
L3.append(12)
L3.append(7)
L3.append(6)
L3.append(7)
L3.append(8)

let L4 = new LL
L4.append(12)
L4.append(7)
L4.append(6)
L4.append(7)
L4.append(9)

let int12 = L2.head;
let int23 = L2.head;
let int13 = L2.head
let int14 = null




describe('biggestSubarray Function', () => {

  it('Will will recognize when the second is the end of the first', () => {
    expect(intersection(L1, L2)).toEqual(int12)
  })
  it('Will will recognize when the first is the end of the second', () => {
    expect(intersection(L1, L2)).toEqual(int23)
  })
  it('Will iterate through to find the intersection', () => {
    expect(intersection(L1, L2)).toEqual(int13)
  })
  
  it('Return null for no intersection', () => {
    expect(intersection(L1, L4)).toEqual(null)
  }) 

})