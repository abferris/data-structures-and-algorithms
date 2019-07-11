// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2
// In javascript that input would not allow you to access the first one of each. It should be [[30, 75], [0, 50], [60, 150]]

class Node {
  constructor(value){
    this.value = value
    this.pre = null
    this.next = null
  }
}

class DblLL{
  constructor(){
    this.head = null
  }
}

function roomsRequired( arr ){
  //create rooms array
   rooms = []
  //iterate through time slot
  for (let i = 0; i < arr.length; i++){
    // go through rooms
    let done = null
    let j = 0
    while (j < rooms.length && !done){
      // go through the timeslots
        // if the previous' second value is less than the new slot's first and 
        // the next's first value is less than the new slot's second value 
          //add it in
    // if you reach the end and the time slot hasn't been added
      //add a room and with the current time slot

    }

  }
}

module.exports = roomsRequired