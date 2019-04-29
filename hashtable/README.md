
# DSA: Hashtables
April 28, 2019  
Author: Aaron Ferris  
  
[pull request](https://github.com/abferris/data-structures-and-algorithms/pull/52)  
[Travis](https://travis-ci.com/abferris/data-structures-and-algorithms)
[Folder wit hash table content](https://github.com/abferris/data-structures-and-algorithms/tree/hashtable/hashtable)

## Challenge
Create a functioning hashtable that will store information correctly and is searchable through a function
## Approach & Efficiency
My approach very closely followed what was given to us by the explanation referenced below.  
I did a few things that were slightly different. 

### Steps

#### algorithm
* Hashtable is a class
  * takes in a size that defaults as 16
  * Creates a new array with input size
  
  * Has a fucntion to hash values
    * function will split the values, and for each value add their ascii value together, and at the end will multiply them by by 599 and return the modulus when divided by the array's size
    
  * Has a function to set the value
    * takes in a key and a value
    * gives a hashed key based on the number returned when the key is run through the hash function
    * the entry to be put in is an object with a propety of key that has a value of the input value.
    * if the map has nothing at the hashed key, it will create an ew linked list with the entry as it's head
    * otherwise it appends the entry
  
  * Has a function that will find a key in the hash map
    * hashes they key
    * looks in the map at the hashed value
    * if there is a list, set a variable as the head
    * while current exists
      * if current's value has they property of the key return it's value 
      * move to the next
    * If no dice, return false

  
#### Written out steps
  
* new hashtable (16 empty spots)  
  * [ , , , , , , , , , , , , , , , ]  
* Set (Aaron, Me)  
  * Hash process  
    * Aaron => (65+97+114+111+110)*599/16 = 7 
  * Map at 7 is empty
  * make a new linked list
  * {Aaron: 'Me'} is he head's value
* find (Aaron)
  * hash Aaron for 7
  * current is map[7]'s head
  * current's value has Aaron as key? True
    * Return 'Me'
  

## Tests and completion
This function should be able to:  

[x] Add a key/value to your hashtable results in the value being in the data structure
[x] Retrieve based on a key returns the value stored
[x] Successfully returns null for a key that does not exist in the hashtable
[x] Successfully handle a collision within the hashtable
[x] Successfully retrieve a value from a bucket within the hashtable that has a collision
[x] Successfully hash a key to an in-range value
