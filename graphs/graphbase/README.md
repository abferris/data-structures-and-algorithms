
# DSA: Graphs
April May 5, 2019
Author: Aaron Ferris  
  
[pull request](https://github.com/abferris/data-structures-and-algorithms/pull/56)  
[Travis](https://travis-ci.com/abferris/data-structures-and-algorithms)
[Folder wit hash table content](https://github.com/abferris/data-structures-and-algorithms/graphs/graphbase/)

## Challenge
Create a Graph base
## Approach & Efficiency
* I followed the idea behind graph adjacency table, using a 2d array.  
* The object has a list of nodes and an array of connections


### Steps and algo
* can be seen in my notes
* Graph notes for addNode and addEdge
![Graph notes for addNode, addEdge](./graphs1.jpg)  
  
* Graph notes for getNodes, GetNeighbors and size
![Graph notes for getNodes, GetNeighbors and size](./graphs2.jpg)

### Tests: 
 Graph function
    ✓ will create a graph (6ms)
  Graph`s addNode function
    ✓ will add a node to an empty graph (1ms)
    ✓ will add a node with a name to a not-empty graph (1ms)
    ✓ will name and add a node if no name is specified
  Graph`s addEdge function
    ✓ will add an edge with a weight (1ms)
    ✓ will add an edge without a weight (1ms)
    ✓ will return null trying to add an impossible edge
  Graph`s getNodes function
    ✓ will return the nodes  (1ms)
  Graph`s getNeighbors function
    ✓ will return an array of connections for a valid input
    ✓ will return null for an invalid input (1ms)
  Graph`s size function
    ✓ will return a graph`s size
