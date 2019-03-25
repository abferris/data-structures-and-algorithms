# DSA LINKED LIST
DSA 1: linked list
March 24, 2019
## Challenge
The challenge is to create a linked list, add a method to add values to it, add a method to search for a value, and a method to print the value

## Approach 

Create a class for linked list with a propety head: null.

subsequent added nodes reference a node class with a value and a next 

 first have their next set to the head of the linked list, then define the head of the linked list as the node.

 You end up with what is basically nested objects (object-ception if you will)

your search function will set a value of current to start as head. while current has a value that is not null, run the following. if current's value = input return true, otherwise  set current to equal current.next

your print function should start with a variable current at the head. while current exists (is not null) document it. output starts as an empty array, or a string This could be done by adding it to a output or simply logging the console.

[x]Can successfully instantiate an empty linked list
[x]Can properly insert into the linked list
[x]The head property will properly point to the first node in the linked list
[x]Can properly insert multiple nodes into [x]the linked list
[x]Will return true when finding a value within the linked list that exists
[x]Will return false when searching for a value in the linked list that does not exist
[x]Can properly return a collection of all the values that exist in the linked list