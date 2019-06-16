function Node (value){
  this.value = value;
  this.next = null
}

function removeKFromList(l, k) {
  let current = l;
  let previous = null;
  while (current !== null){
      if (current.value === k){
          if(!previous) { 
              l = current.next;
              current =l
          } else{
              previous.next = current.next;
              current = current.next;
          }
          
      } else {
        previous = current;
        current = current.next;
      }
  }
  
  return l;
}

module.exports = {removeKFromList, Node}