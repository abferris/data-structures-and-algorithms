'use strict'
const functions = require('../conwayLife.js')
const conwayLife = functions.conwayLife;
const findNeighbors = functions.findNeighbors;
const transform = functions.transform;

//test board
const test = [['*','.','*','*','*','*','.','*'], 
              ['*','.','*','*','*','.','.','.'],
              ['.','.','*','.','*','.','.','.'],
              ['*','.','*','*','*','.','.','.'],
              ['*','.','.','.','*','*','.','.'],
              ['.','.','*','*','*','*','.','.'],
              ['.','.','*','*','*','*','.','.'],
              ['.','.','*','*','*','*','*','*'],
              ['*','.','*','*','*','*','*','.']]
// testing parameters for findNeighbors
const testX1 = 2
const testY1 = 6
const output1 = 0
const testX2 = 2
const testY2 = 5
const output2 = 3
const testX3 = 2
const testY3 = 3
const output3 = 8
const testX4 = 3
const testY4 = 3
const output4 = 5
const testX5 = 1
const testY5 = 0
const output5 = 1
const testX6 = 0
const testY6 = 1
const output6 = 4
const testX7 = 1
const testY7 = test[1].length-1
const output7 = 1
const testX8 = test.length-1
const testY8 = 1
const output8 = 3
// testing parameters for transform



describe('findNeighbors function', () => {

  it('will recognize if there are no living neighbors', () => {
    expect(findNeighbors(test,testX1,testY1)).toEqual(output1);
  })

  it('will recognize if there are some living neighbors', () => {
    expect(findNeighbors(test,testX2,testY2)).toEqual(output2);
  })

  it('will recognize if all neighbors are living', () => {
    expect(findNeighbors(test,testX3,testY3)).toEqual(output3)
  })

  it('will not count itself', () => {
    expect(findNeighbors(test,testX4,testY4)).toEqual(output4)
  })

  it('will not count negative x values ', () => {
    expect(findNeighbors(test,testX5,testY5)).toEqual(output5)
  })

  it('will not count negative y values', () => {
    expect(findNeighbors(test,testX6,testY6)).toEqual(output6)
  })

  it('will not count outside the board in x direction', () => {
    expect(findNeighbors(test,testX7,testY7)).toEqual(output7)
  })

  it('will not count outside the board in y direction', () => {
    expect(findNeighbors(test,testX8,testY8)).toEqual(output8)
  })

})

describe('transform function', () => {

  it('will bring back a board that is of the same size as the initial board', () => {
    expect(transform(test).length).toEqual(test.length)
    expect(transform(test)[0].length).toEqual(test[0].length)
  })
  it('will make any live cell with less than two live neigbors dead', () => {
    expect(transform(test)[0][7]).toEqual('.')
  })

  it('will make any live cell with two live neighbors living', () => {
    expect(transform(test)[0][5]).toEqual('*')
  })

  it('will make any live cell with three live neighbors living', () => {
    expect(transform(test)[5][2]).toEqual('*')
  })
  
  it('will make any live cell with more than three live neighbors dead', () => {
    expect(transform(test)[6][3]).toEqual('.')
  })

  it('will make any dead cell with exactly three live neigbors alive', () => {
    expect(transform(test)[8][7]).toEqual('*')
  })

})
