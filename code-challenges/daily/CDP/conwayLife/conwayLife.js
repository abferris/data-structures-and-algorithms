// Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:

// Any live cell with less than two live neighbours dies.
// Any live cell with two or three live neighbours remains living.
// Any live cell with more than three live neighbours dies.
// Any dead cell with exactly three live neighbours becomes a live cell.
// A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.

// Implement Conway's Game of Life. It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for. Once initialized, it should print out the board state at each step. Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.

// You can represent a live cell with an asterisk (*) and a dead cell with a dot (.).

// input 1 is a board with living and dead cells in it
let test = [['*','.','*','*','*','*','.','*'], 
            ['*','.','*','*','*','.','.','.'],
            ['.','.','*','.','*','*','.','.'],
            ['*','.','*','.','*','*','.','.'],
            ['*','.','.','.','*','*','.','.'],
            ['.','.','*','*','*','*','.','.'],
            ['.','.','*','*','*','*','.','.'],
            ['.','.','*','*','*','*','*','*'],
            ['*','.','*','*','*','*','*','.']]
// input 2 is a positive integer
function conwayLife( board, turns ){
  for (let i = 0; i < turns; i++){
    board = transform(board)
  }
  return board
}

function transform (board){
  //create new board
  let newBoard = []
    for (let j = 0; j < board.length; j++){
    //create row
    newBoard.push([])
     for(let k = 0; k < board[j].length; k++){
       //find neighbors
      let liveNeighbors = findNeighbors(board, j, k)
      if (liveNeighbors === 3){
        newBoard[j].push('*');
      } else if(liveNeighbors === 2 && board[j][k]===('*')) {
        newBoard[j].push('*')
      } else {
        newBoard[j].push('.')
      }
     }
  }
  return newBoard
}

function findNeighbors( board, x, y){
  let living = 0
  for( let a = -1; a < 2; a++){
    for ( let b = -1; b < 2; b++ ){
      let self = false
      if (a===0 && b===0){
        self = true
      }
      if (!self && board[x+a] &&board[x+a][y+b] && board[x+a][y+b]==='*'){
        living ++
      }
    }
  }
  return living
}


module.exports = {conwayLife,findNeighbors,transform}