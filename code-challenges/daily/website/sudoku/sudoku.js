function sudoku(grid) {

  let ht = []
  for (let i = 0; i < grid.length+1; i++){
      ht.push( {row:{} ,column:{} ,sector:{} } )
  }
  for(let i = 0; i< grid.length; i++){
      for (let j = 0; j < grid.length; j++){
          if(parseInt(grid[i][j])) {
              let bucket = parseInt(grid[i][j]);
              let sector;
              if (i < 3 && j< 3){
                  sector=1
              } else if (i<3 && j<6){
                  sector=2
              } else if (i<3 && j<9){
                  sector=3
              } else if (i<6 && j<3){
                  sector=4
              } else if (i<6 && j<6){
                  sector=5
              } else if (i<6 && j<9){
                  sector=6
              } else if (i<9 && j<3){
                  sector=7
              } else if (i<9 && j<6){
                  sector=8
              } else if (i<9 && j<9){
                  sector=9 
              };
              
              if (ht[bucket].row[i] === true || ht[bucket].column[j] === true || ht[bucket].sector[sector] === true) {
                  return false
              }

              ht[bucket].row[i] = true
              ht[bucket].column[j] = true
              ht[bucket].sector[sector] = true
          }
      }
      
  }
  return true
}

module.exports = sudoku