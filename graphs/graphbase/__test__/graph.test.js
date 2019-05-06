'use strict';

const GRAPH = require('../graph.js');

const graphy = new GRAPH ();

describe('Graph function', () => {
  it('will create a graph', () => {
    expect(graphy.nodes).toEqual([]);
    expect(graphy.edgeMap).toEqual([]);  });
});

describe('Graph`s addNode function', () => {

  it('will add a node to an empty graph', () => {
    let newNode = 'a';
    graphy.addNode(newNode);
    expect(graphy.nodes[0]).toEqual(newNode);
    expect(graphy.edgeMap).toEqual([[0]]);
  });

  it('will add a node with a name to a not-empty graph', () =>{
    let newNode = 'b';
    graphy.addNode(newNode);
    expect(graphy.nodes[1]).toEqual(newNode);
    expect(graphy.edgeMap).toEqual([[0,0],[0,0]]);
  }); 

  it('will name and add a node if no name is specified', () =>{
    graphy.addNode();
    expect(graphy.nodes[2]).toEqual('node 2');
    expect(graphy.edgeMap).toEqual([[0,0,0],[0,0,0],[0,0,0]]);
  });

});

describe('Graph`s addEdge function', () => {

  it('will add an edge with a weight', () => {
    let newVal = 5;
    expect(graphy.addEdge('a','b', 5)).toEqual(newVal);
    let a = graphy.nodes.indexOf('a');
    let b = graphy.nodes.indexOf('b');
    expect(graphy.edgeMap[a][b]).toEqual(newVal);
  });

  it('will add an edge without a weight', () => {
    let b = graphy.nodes.indexOf('b');
    let a = graphy.nodes.indexOf('a');
    expect(graphy.addEdge('b','a')).toEqual(1);
    expect(graphy.edgeMap[b][a]).toEqual(1);

  });

  it('will return null trying to add an impossible edge', () => {
    expect(graphy.addEdge('a','c')).toEqual(null);
  });
});

describe('Graph`s getNodes function', () => {

  it('will return the nodes ', () => {
    let output = ['a','b','node 2'];
    expect(graphy.getNodes()).toEqual(output);
  });

});

describe('Graph`s getNeighbors function', () => {

  it('will return an array of connections for a valid input', () => {

    let output = {edges: {b: 5}, value: 'a'};
    expect(graphy.getNeighbors('a')).toEqual(output);  

  });

  it('will return null for an invalid input', () => {

    expect(graphy.getNeighbors('c')).toEqual(null);
    
  });

});

describe('Graph`s size function', () => {

  it('will return a graph`s size', () => {

    expect(graphy.size()).toEqual(3); 
  });

});

