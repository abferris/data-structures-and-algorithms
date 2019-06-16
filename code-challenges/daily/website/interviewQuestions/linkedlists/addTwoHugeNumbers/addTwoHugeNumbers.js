function Node(x) {
  this.value = x;
  this.next = null;
}

function addTwoHugeNumbers(a, b) {
    
  let aRev = reverse(a);
  let bRev = reverse(b);
  let outRev = join(aRev, bRev);
  return reverse(outRev)

  function join(left, right, rem = 0) {
      //setup output and carry
      let output = new ListNode(rem)
      let carry = 0
      //if left add left
      left ? output.value += left.value: 0;
      //if right add right
      right ? output.value+=right.value: 0;
      // if output is too big carry next value
      if (output.value>9999){
          output.value -= 10000
          carry =1
          left ? 0 : left = new ListNode(0)
          right ? 0 : right = new ListNode(0)
      } else if(!left && !right && !rem) {
          return null
      } else if(!left && right) {
          left = new ListNode(0);
      } else if( left && !right){
          right = new ListNode(0);
      }
      //recursively call to create next element
       output.next = left && right? join(left.next ,right.next,carry) : 0;
      return output
  }


  function reverse(LL) {
      let prev = null;

      while (LL) {
          let output = new ListNode(LL.value);
          output.next = prev;

          prev = output;
          LL = LL.next;
      }

      return prev;
  }
}

module.exports = {addTwoHugeNumbers, Node}


