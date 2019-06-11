'use strict';
const GRAPH = require('../graphbase/adjList.js');

class Depth extends GRAPH {

  walk(root, visited = []) {
    console.log(visited);
    if(!this.nodes[root]){ return visited; }

    visited.push(root);

    let neighbors = Object.keys(this.nodes[root].connections);
    for (let i = 0; i< neighbors.length; i++) {
      
      if( !visited.includes(neighbors[i]) ){
        
        this.walk(neighbors[i], visited);
      }
    }
    return visited;
  }

}



module.exports = Depth;