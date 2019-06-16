'use strict';
const GRAPH = require('../graphbase/adjList.js');
class graphy extends GRAPH {
  getEdges(arr) {
    let acc = 0;
    if(this.nodes[arr[0]] && arr.length===1){ return [true,acc]; }
    if(!this.nodes[arr[0]]){ return false; }
    for(let i = 0; i < arr.length-1; i++){
      if(this.getNeighbors(arr[i])[arr[i+1]]){
      
        acc += this.getNeighbors(arr[i])[arr[i+1]];
      } else{
        return false;
      }
    }
    return [true,acc];
  }
}
           
module.exports = graphy;
            


