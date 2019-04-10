# DSA breadthprint
DSA 3: Trees
April 9, 2019

[pull request](https://github.com/abferris/data-structures-and-algorithms/pull/44)  
[Travis](https://travis-ci.com/abferris/data-structures-and-algorithms)

* Breadthprint
  * will run on a even binary tree
  * will run on uneven binary tree
  * will run on empty tree

## Approach 
* Use a queue
  * Enqueue item
  * peek and set to current
  * in loop 
  * pop top
  * log current value
  * if it has a left child, enqueue it
  * if it has a right child, enqueue it
  * repeat loop

![UML](./FBUML.jpg)

### Tests
#### Challenge 1  
##### Binary Tree and BST
[ ] will run on even binary tree
[ ] will run on uneven binary tree
[ ] will run on empty tree


I had issues with particularly requiring in the method so I can test it