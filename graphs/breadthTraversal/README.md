
# DSA: Graphs
April May 6, 2019
Author: Aaron Ferris   
Whiteboard with: Andrew Curtis 
  
[pull request](https://github.com/abferris/data-structures-and-algorithms/pull/57)  
[Travis](https://travis-ci.com/abferris/data-structures-and-algorithms)
[Folder wit hash table content](https://github.com/abferris/data-structures-and-algorithms/graphs/breadthTraversal/)


## Challenge
Traverse a graph Breadth first

## Approach & Efficiency
* Use the weekend adjacently list to represent the graph
* use a queue from DSA in the past
* takes in root node name
* use a queue to say where to go next, and a dictionary to see what has been visited already
* first put the root into both
* push root into output array, dequeue it
* look at it's neighbors and if they aren't in dictionary add them to the queue and then the dictionary
* repeat until the queue is empty


### Steps and algo
* can be seen in my whiteboard
* Whiteboard with Andrew Curtis

![BreadthTraversal](./breadth.jpg)

### Tests: 
#### Breadth first method
  * ✓ will traverse a large tree breath first (6ms)
  * ✓ will traverse a graph of one node
  * ✓ will deal with a self link in a graph (1ms)
  * ✓ will not walk to a disconnected node from the starting point
  * ✓ will traverse a graph of one node
