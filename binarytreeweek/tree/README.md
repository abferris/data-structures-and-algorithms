# DSA Binary trees
DSA 3
March 30, 2019

[pull request](https://github.com/abferris/data-structures-and-algorithms/pull/44 )  
[Travis](https://travis-ci.com/abferris/data-structures-and-algorithms)
## Challenge 1

* Create A Binary Tree Class
  * function preOrder
  * function inOrder
  * function postOrder
* Create A Binary Search Tree
  * has add value and puts a value in the place of a binary search tree
  * has contains, which returns boolean if they do or don't contain the value

## Approach 
* NOTE: I have issues with the traversals
* Below are the whiteboards planning how to do this.
![UML](./treeuml.jpg)

## Challenge 2

* Create breadth search method on the Binary Tree Class
  * takes in no values
  * runs on the tree
  * gives back the values breadth first, row by row

## Approach
* Below is the whiteboard plannign to do this
* Steps
  * Utilize a queue.
  * Enqueue the root.
  * enqueue the root's left and right child if they exist
  * output or push to an output array the value at the head of the queue
  * dequeue the head.
  * continue until your queue is empty
  * if you did not output in your loop, return the output array
![UML](./breadthfirstuml.jpeg)

## Challenge 3

* Create find max value that works on the binary tree class
  * takes in no values
  * runs on the tree
  * gives back the values breadth first, row by row

## Approach
* Below is the whiteboard plannign to do this
* Steps
  * Utilize a queue.
  * Enqueue the root.
  * enqueue the root's left and right child if they exist
  * change the output if it is smaller than compared root's data
  * dequeue the head.
  * continue until your queue is empty
  * if you did not output in your loop, return the output array
![UML](./maxValueUML.jpeg)

