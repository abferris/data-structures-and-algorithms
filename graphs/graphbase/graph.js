'use strict';


class GRAPH {
  constructor(){
    this.nodes = [];
    this.edgeMap = [];
  }

  // addNodes takes in a value
  addNode(value){
    //adds a spot for connections for new node
    for( let i = 0; i < this.nodes.length; i++){
      this.edgeMap[i].push(0);
    }
    //names new node
    let name = value || `node ${this.nodes.length}`;
    //adds new node into list of nodes
    this.nodes.push(name);
    // makes an array of values to put into the 
    let temp = [];
    for ( let i = 0; i < this.nodes.length; i++){
      temp.push(0);
    }
    this.edgeMap.push(temp);
    return this.edgeMap[value];
  }

  // addEdge takes in the value of the start node, the value of the end node and the value of the weight
  addEdge(start, end, weight){
    // get indexes of the start and the end
    let startIdx = this.nodes.indexOf(start);
    let endIdx = this.nodes.indexOf(end);

    weight ? weight : weight = 1;
    //if start index and end index exist
    if ( this.nodes[startIdx] && this.nodes[endIdx] ) {

      this.edgeMap[startIdx][endIdx] = weight;
   
      return this.edgeMap[startIdx][endIdx];
    } else { return null; }
  }

  // getNodes takes in no value
  // returns the array
  getNodes() {
    return this.nodes;
  }

  // getNeighbors takes in a node value
  getNeighbors(node){
    let nodeIdx = this.nodes.indexOf(node);
    if (nodeIdx === -1){
      return null;
    }

    let neighbors = {};
    for (let i = 0; i < this.nodes.length; i++){
      if (this.edgeMap[nodeIdx][i]){
        neighbors[this.nodes[i]] = this.edgeMap[nodeIdx][i] ;
      }
    }
    return {
      value: node,
      edges: neighbors,
    };


  }

  size(){
    return this.nodes.length;
  }

}

module.exports = GRAPH;