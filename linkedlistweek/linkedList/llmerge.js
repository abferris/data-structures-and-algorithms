'use strict';

const mergeList = function(lla, llb) {
  console.log('started');
  if (!lla | !llb) {
    return null;
  }
  let acurrent = lla.head;
  let bcurrent = llb.head;
  let c;
  while (acurrent) {
    c = bcurrent.next;
    bcurrent.next = acurrent.next;
    acurrent.next = bcurrent;
    bcurrent = c;
    acurrent = acurrent.next.next;
  }
};



module.exports = {mergeList};
