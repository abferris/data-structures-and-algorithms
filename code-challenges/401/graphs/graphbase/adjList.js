'use strict';
class Vert {
  constructor(val){
    this.val=val;
    this.connections = {};
  }
}



class GRAPH {
  constructor(){
    this.nodes = {};
  }
  
  // Adds a new node to the graph Takes in the value of that node Returns the added node
  addNode(value){
    if(!value){return null ; }
    let node = new Vert(value);
    this.nodes[value] = node;
    return node;
  }


  // Adds a new edge between two nodes in the graph
  // Include the ability to have a “weight”
  // Takes in the two nodes to be connected by the edge
  // Both nodes should already be in the Graph
  addEdge(origin,destination,weight){
    
    if (this.nodes[origin] && this.nodes[destination]){

      this.nodes[origin].connections[destination] = weight || 1;
      return this.nodes[origin].connections[destination];
    } else { return null; }
  }

  // Returns all of the nodes in the graph as a collection (set, list, or similar)
  getNodes(){
    return Object.keys(this.nodes);
  }

  // Returns a collection of nodes connected to the given node
  // Takes in a given node
  // Include the weight of the connection in the returned collection
  getNeighbors(node){
    if(!this.nodes[node]){ return null;} 
    else{
      return this.nodes[node].connections; 
    }
  }

  size(){
    return Object.keys(this.nodes).length;
  }
}  

module.exports = GRAPH;