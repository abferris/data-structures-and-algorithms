const GRAPH = require('../breadth.js');


const graph1 = new GRAPH ();
graph1.addNode('a');
graph1.addNode('b');
graph1.addNode('c');
graph1.addNode('d');
graph1.addNode('e');
graph1.addNode('f');
graph1.addNode('g');
graph1.addEdge('a', 'b');
graph1.addEdge('b', 'a');
graph1.addEdge('b', 'c');
graph1.addEdge('b', 'd');
graph1.addEdge('c', 'b');
graph1.addEdge('c', 'd');
graph1.addEdge('c', 'f');
graph1.addEdge('f', 'd');
graph1.addEdge('f', 'g');
graph1.addEdge('g', 'f');
graph1.addEdge('g', 'd');
graph1.addEdge('d', 'b');
graph1.addEdge('d', 'c');
graph1.addEdge('d', 'g');
graph1.addEdge('d', 'e');

const graph2 = new GRAPH();
graph2.addNode('a');

const graph3 = new GRAPH();
graph3.addNode('a');
graph3.addNode('b');
graph3.addNode('c');
graph3.addEdge('a','b');

describe('Breadth first method', () => {
  it('will traverse a large tree breath first', () => {
    expect(graph1.walk('a')).toEqual([ 'a', 'b', 'c', 'd', 'f', 'g', 'e' ]);
  });

  it('will traverse a graph of one node',() => {
    expect(graph2.walk('a')).toEqual(['a']);
  });
  
  it('will deal with a self link in a graph',() => {
    graph1.addEdge('a','a');
    expect(graph1.walk('a')).toEqual([ 'a', 'b', 'c', 'd', 'f', 'g', 'e' ]);
  });

  it('will not walk to a disconnected node from the starting point',() => {
    expect(graph3.walk('a')).toEqual(['a','b']);
  });
  it('will traverse a graph of one node',() => {

  });
});

