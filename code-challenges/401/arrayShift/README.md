# Array Shift Code challenge

![PRRequest](https://github.com/abferris/data-structures-and-algorithms/pull/26)
![TravisTests](https://travis-ci.com/abferris/data-structures-and-algorithms)
![JSDocs]: not quite done yet

Code Challenge - 02
March 18, 2019
## Challenge
The challenge is to insert a input into the center of an array without using built in methods.

## Approach and Efficiency
We ran through the array with a for loop, and use 3 if statements in order to decide if you were before in the middle or after the center. Once you hit the center you add in the first value, then the second value, and after you insert at position i+1

I belive that the efficiency should be O(n), but we haven't gone through it

## Solution

![Whiteboard](assets/challenge-02-WB.jpg)

## Tests:
 - [x] Inserts into middle of array
 - [x] Inserts after middle if odd
 - [x] Can Insert Object
 - [x] Can insert array into an array
 - [x] Will insert after array if length is one
 - [x] will return null if array input is not array
 - [x] will return null if too many inputs
 - [x] will return null if no inputs

Completed whiteboard with Chris Merritt and Joseph Wolfe

