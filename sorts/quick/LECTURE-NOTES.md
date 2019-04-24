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

![Visual](http://blog.ezyang.com/img/range-trees/comparison.png)

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
[visual](http://blog.ezyang.com/img/range-trees/comparison.png)
pulled from http://blog.ezyang.com/2012/02/visualizing-range-trees/


