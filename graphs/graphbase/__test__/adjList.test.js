const GRAPH = require('../adjList.js');


const graphy = new GRAPH ();

describe('Graph function', () => {
  it('will create a graph', () => {
    expect(graphy.nodes).toEqual({});
  });
});

describe('Graph`s addNode function', () => {

  it('will add a node to an empty graph', () => {
    let newNode = 'a';
    let key = {val: newNode, connections: {}};
    let output = graphy.addNode(newNode);
    expect(output).toEqual(key);
    expect(graphy.nodes[newNode]).toBeTruthy();
  });

  it('will add a node with a name to a not-empty graph', () =>{
    let newNode = 'b';
    let key = {val: newNode, connections: {}};
    let output = graphy.addNode(newNode);
    expect(output).toEqual(key);
    expect(graphy.nodes[newNode]).toBeTruthy();
  }); 

  it('will return null if no name is specified', () =>{
    let output = graphy.addNode();
    expect(output).toEqual(null);

  });

});

describe('Graph`s addEdge function', () => {

  it('will add an edge with a weight', () => {
    let newVal = 5;
    expect(graphy.addEdge('a','b', 5)).toEqual(newVal);
    expect(graphy.nodes['a'].connections['b']).toEqual(newVal);
  });

  it('will add a second edge with a weight', () => {
    let newVal = 7;
    expect(graphy.addEdge('a','a', newVal)).toEqual(newVal);
    expect(graphy.nodes['a'].connections['a']).toEqual(newVal);
  });

  it('will add an edge without a weight', () => {
    expect(graphy.addEdge('b','a')).toEqual(1);
    expect(graphy.nodes['b'].connections['a']).toEqual(1);

  });

  it('will return null trying to add an impossible edge', () => {
    expect(graphy.addEdge('a','c')).toEqual(null);
  });
});

describe('Graph`s getNodes function', () => {

  it('will return the nodes ', () => {

    let output = ['a','b'];
    expect(graphy.getNodes()).toEqual(output);
  });

});

describe('Graph`s getNeighbors function', () => {

  it('will return an array of connections for a valid input', () => {

    let output = {a:7, b:5};
    expect(graphy.getNeighbors('a')).toEqual(output);  

  });

  it('will return null for an invalid input', () => {

    expect(graphy.getNeighbors('c')).toEqual(null);
    
  });

});

describe('Graph`s size function', () => {

  it('will return a graph`s size', () => {

    expect(graphy.size()).toEqual(2); 
  });

});

