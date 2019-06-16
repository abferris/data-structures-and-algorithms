const GRAPH = require('../graphbase/adjList.js');
const queue = require('../../queueandstackweek/stackAndQueue/stacksAndQueues').Queue;
class Breadth extends GRAPH {
  walk(root) {
    const q = new queue();
    const output = [];
    let dict =  {};
    q.enqueue(root);
    dict[root] = true;

    while(q.front){

      let temp = q.front.data;
      output.push(temp);
      q.dequeue();
      if(this.getNeighbors(temp)){
        let adj = Object.keys(this.getNeighbors(temp));
        for( let i = 0; i < adj.length; i++){

          if(!dict[adj[i]]){
            q.enqueue(adj[i]);
            dict[adj[i]] = true;
          }

        }
      }
    }
    return output;
  }

}

module.exports=Breadth;