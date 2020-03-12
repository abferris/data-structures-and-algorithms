'use strict'
function skylinePlotter(array){
  //establish a starting array. 
  //First point is 0,0 in case the building starts after 0,0 or in case there are no buildings
  let output = [ [0,0] ]
  // if input is not an array, return an empty skyline
  if (typeof array !== 'array'){
    return output;
  }
  //iterate through input array
  for (let i = 0; i< array.length; i++){
    // define the parts of the input so they can be easily referenced
    let building = array[i];
    let start = building[0];
    let end = building[1];
    let height = building[2];
    // if the input coordinates are backwards 
    if( end>start){
      //swap the values
      //save end value
      let temp = end
      //set end value as start value
      end = start
      // set start value to the end which is saved at temp
      start = temp
    }
    // surround this in an if statment to deal with incorrect inputs
    // this way if a building isn't correctly defined it moves onto the next poing
    if(building.length === 3 && typeof(start)==='number' && typeof(end)==='number' && typeof(height)==='number'){
      //iterate through output to find placement of beginning of the building
      let j = 0
      // iterate until start is greater than output x cooridnate 
      while (output[j][0]<= start && j < output.length){
        j++
      }
      // if height exceeds output's height before it
      if ( output[j-1][1] < height){
        // if the x-coordinates are the same as the previous
        if (output[j-1][0]=== start){
          // replace the height value of the previous
          output[j-1][1] = height
        } else {
          // insert the new value here
          output.splice(j,0,[start,height])
        }
      }
      j++
      let floorHeight = 0
      //starting at where we were
      while (output[j][0]< end && j< output.length) {
        // if the value is less than
        if(output[j][1]<height){
          floorheight = output[j][1]
          //if the one before it is greater
          if(output[j-1][1] > height){
            //change it  an  step down to height instead of what it was
            output[j][1]=height;
          } else{
            //otherwise remove the value and continue
            output.splice(j,1)
          }
        }
        //move to the next position of output
        j++
      }
      //once we reach the place where the end of the building should be
      if(j === output.length || output[j-1][1] === height){
        output.splice(j-1,0,[end,floorheight];
      }
    }
  }
  return output;
}