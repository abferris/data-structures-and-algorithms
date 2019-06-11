'use strict';
const graph = require('../getEdges.js');

const g = new graph();
//creating nodes
g.addNode('a');
g.addNode('b');
g.addNode('c');
g.addNode('d');
g.addNode('e');
//creating edges
g.addEdge('e','d', 1);
g.addEdge('d','b', 3);
g.addEdge('b','d', 3);
g.addEdge('b','c', 6);
g.addEdge('b','a', 2);
g.addEdge('c','b', 6);
g.addEdge('a','b', 2);
g.addEdge('a','c', 5);

describe('getEdges Function', () => {

  it('will return true with a price of 0 for a single node input', () =>{
    expect(g.getEdges(['e'])).toEqual([true,0]);
  });

  it('willreturn the weight between 2 nodes if two connected nodes are presented', () =>{
    expect(g.getEdges(['a','c'])).toEqual([true,5]);
  });
  it('will return the accumulated weights between connected nodes', () =>{
    expect(g.getEdges(['e','d','b'])).toEqual([true,4]);
  });
  it('will return false for 2 disconnected nodes', () =>{
    expect(g.getEdges(['c','a'])).toEqual(false);

  });
  it('will return false for 3 or more nodes with one disconnected', () =>{
    expect(g.getEdges(['e','a','c'])).toEqual(false);
  });
  it('will return false for an input that is not in the graph',() => {
    expect(g.getEdges(['f','a','c'])).toEqual(false);

  });

});