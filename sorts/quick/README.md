
# Code Challenge 26: Quick 
DSA: Sort  
April 23, 2019  
Author: Aaron Ferris  
  
[pull request](https://github.com/abferris/data-structures-and-algorithms/pull/51)  
[Travis](https://travis-ci.com/abferris/data-structures-and-algorithms)

## Challenge
Create a funciton that executes a quick-sort

## Approach & Efficiency
My approach very closely followed what was given to us by the explanation referenced below.  
I did a few things that were slightly different. 

### Steps

#### algorithm
* quicksort is a function 
  * inputs: array, left default 0, right default arr.length-1
  * if left < right
    * define pos as the return value of part function
      * part input arr, left, right
    * call quicksort 
      * inputs: arr, left, pos-1
    * call quicksort 
      * inputs: arr, pos+1, right
  * return arr 
  
* helper function part
  * inputs arr, left, right
  * set pivot
    * arr[right]
  * save idx of lower value
    * left-1
  * for loop from left to (not inculding) right
    * if arr[i] <= pivot
      * increment low
      * swap i and low 
  * insert low
  * swap right and low
  * return low

* helper function swap
  * inputs arr, a, b
  * temp assigned as arr[a]
  * arr[a] assigned as arr[b]
  * arr[b] assigned as temp
  
#### Pseudocode 
 QS  inputs: (arr, left default 0, right default arr length -1)  
    if left < right  
        // Partition the array  
      ASSIGN pos  AS Part(arr, left, right)  
        // recursively sort left  
        QS(arr, left, pos - 1)  
        // recursively sort right  
        qs(arr, pos + 1, right)  
    
      
 Partition(arr, left, right)  
    // set pivot  
    DEFINE pivot AS arr[right]  
    // save idx of lower value  
    DEFINE low AS left - 1  
  
    for loop i start left less than right   
        if arr[i] <= pivot  
            low++  
            Swap(arr, i, low)  
       
     Swap(arr, right, low + 1)  
     return low + 1  
  
ALGORITHM Swap(arr, a, b)  
    DEFINE temp;  
    temp ASSIGN VALUE arr[a]  
    arr[a] ASSIGN VALUE arr[b]  
    arr[b] ASSIGN VALUE temp  

  
  
The way this is called will result in  dealing with array with a length of 1 first, and then building it up.







The efficiency of space is O(1) and time at worst is O(n^2)
Insertion sort background and starter information given by codefellows.  

## Tests and completion
This function should have:  
Not complete yet
