// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.



function intersection( ll1, ll2 ){
  //find lengths
  const length1 =length(ll1);
  const length2 =length(ll2);
  console.log( 'lengths', length1, length2)
  //find difference betweeen lengths 
  let diff = length1-length2
  let bigger;
  let smaller
  //establish which is larger and which is smaller
  if (diff > 0){
    bigger =  ll1.head;
    smaller = ll2.head;
  } else {
    bigger = ll2.head;
    smaller = ll1.head
  }
  diff = Math.abs(diff)
  // iterate to where they have the same length
  while(diff>0) {
    bigger = bigger.next;
    diff --
  }
  // iterate through the nodes until they are the same
  while (JSON.stringify(bigger) != JSON.stringify(smaller)){
    bigger = bigger.next
    smaller = smaller.next    
  }
  //return the series of nodes 
  return bigger
 
  function length(ll){
    let current = ll.head;
    let count = 0
    while (current){
      current = current.next;
      count ++
    }
    return count
  }

}

module.exports = intersection
