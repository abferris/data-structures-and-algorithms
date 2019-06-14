function Node (value){
  this.value = value;
  this.next = null
}

function isListPalindrome(l) {
  let start = l;
  if (!start || !start.next){
      return true
  }
  
  let prev = start;
  let back = start.next
  back.prev = prev
  while(back.next !== null){
      prev = prev.next
      back = back.next
      back.prev = prev
  }
  while (start.next) {
      if (start.value !== back.value){
          return false
      }
      start = start.next;
      back = back.prev
  }
  return true

}

module.exports = {isListPalindrome, Node};