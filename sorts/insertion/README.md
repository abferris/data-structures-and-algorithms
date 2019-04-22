
# DSA Insertion Sort 
DSA 5  
April 22, 2019  
Author: Aaron Ferris  
  
[pull request](https://github.com/abferris/data-structures-and-algorithms/pull/48)  
[Travis](https://travis-ci.com/abferris/data-structures-and-algorithms)

## Challenge
Create a funciton that executes a insertion-sort

## Approach & Efficiency
My approach very closely followed what was given to us by the explanation referenced below.  

### Steps
* loop through the array starting at the second value
* save the value
* in a while loop
  * look at the one before it
  * if its greater replace it
  * iterate towards the front until you hit 0 or where temp is larger than the point
  * replace the spot with temp saved value
* return the array

### Example
Format:  
* Step: \[array\]
  * \[array during substep\]
Example:  
* input: \[5,4,3,2,1\]
  * j is 0
  * Save 4
  * 4 is less than 5 
  * insert 5 at 1\[5,5,3,2,1\]
  * j is -1
  * loop breaks
  * 5 is replaced as 4 \[4,5,3,2,1\]
* do the same thing for later values
* State: \[4,5,3,2,1\]
  * Save 3 
  * \[4,5,5,2,1\]
  * \[4,4,5,2,1\]
  * \[3,4,5,2,1\]
* State: \[3,4,5,2,1\]
  * Save 2 
  * \[3,4,5,5,1\]
  * \[3,4,4,5,1\]
  * \[3,3,4,5,1\]
  * \[2,3,4,5,1\]
* State: \[2,3,4,5,1\]
  * Save 2 
  * \[2,3,4,5,5\]
  * \[2,3,4,4,5\]
  * \[2,3,3,4,5\]
  * \[2,2,3,4,5\]
  * \[1,2,3,4,5\]
* return


The efficiency of space is O(1) and time is O(n^2)
Insertion sort background and starter information given by codefellows.  
[Insertion Sort Explanation](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/InsertionSort)
## Tests and completion
This function should have:  
[X] A randomly generated unsorted array returns the array sorted  
[X] A sorted array returns the same sorted array  
[X] A backwards-sorted array returns the array sorted  
[X] An empty array returns the same empty array  
[X] An array of one element returns the same single-element array