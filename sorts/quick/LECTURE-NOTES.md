# Lecture Notes: Merge Sort
  
* Quick sort: 
  * A quick an efficent way to sort a lot of data for time.   
  * Better with time, worse with space.   
  * Typically used with sort from scratch.  
  * Insertion sort may be used for adding extra data points, or smaller sets of data.  
  * Breaks the problem up into smaller parts and deals with unsorted smaller parts first

## Learning Objectives
* What are sorts?
* How will we use them?
* When do we use merge sort 
* Quick intro to recursion
* How does merge sort work?
* Today

## Lecture Flow


1) HAVE A STUDENT BE A COMPUTER  
* ask for a volunteer
* have volunteer sort an array on a whiteboard of sticky notes
  * They can only use one hand at a time
  * They can only compare 2 things at a time
  * 2 things can not be in one place at a time
* when a student makes a decision to look at a particular item, ask why?
  * if they say because it is the smallest, ask what they would have to do as a computer to deterimine it.
  * what do they have to compare
  * how many times do they have to compare
* if they have trouble doing it their way, ask for suggestions from audience for how to
* if they continue to have trouble  walk them through the closest type of sort they are to
  * this will usually be insertion sort. if you're not sure default back to this
2) sorts:   
* sorting data is a critical part of our job
* definition of a sort
* different sorts for every situation
  * ask them about types of sorts (insertion)
  * if you have time run # 2
3) quick sort 
* does it in place 
  * almost no additional storage space needed
* can be done in a number of places
  * good if you have intuition about where to set a pivot
* doesn't take up as much space
* worst case for time O(n^2)
* conquer and divide
  * what do we do with huge problems?
    * break it up into smaller problems  
  * easier to sort smaller pieces than larger pieces
  * when we get to larger pieces, if they are already sorted, we are able to handle them easier.

* commonly done with recursion
  * what is recursion?
    * calls itself within the function    
    * can use up less time than loops depending on situation
    * call stack refresher(talked about in 201)  
      * when you call the function inside of itself, the rest of the function is put on hold until the calling of itself is resolved
      * after it returns to finish the rest of it.
* quick algorithm step through
  * draw it out
be
## Diagram

[Visual](https://www.c-programming-simple-steps.com/images/merge-sort-visual.png)

## Algorithm

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
  
   



## Pseudocode
###QUICKSORT
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
  

## Readings and References

**Watch**

* [Udacity on QuickSort](https://www.youtube.com/watch?v=kUon6854joI)

**Read**

* [Why use quicksort over merge sort?](https://www.geeksforgeeks.org/quicksort-better-mergesort/)
* [Stanford Overview of Quicksort](https://cs.stanford.edu/people/eroberts/courses/soco/projects/2008-09/tony-hoare/quicksort.html)


**Bookmark**

* [Sorting Algorithms for Dayz](https://www.geeksforgeeks.org/sorting-algorithms/)

**Diagram**
* ![Visual](data:image/png;base64,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)  
pulled from http://blog.ezyang.com/2012/02/visualizing-range-trees/

