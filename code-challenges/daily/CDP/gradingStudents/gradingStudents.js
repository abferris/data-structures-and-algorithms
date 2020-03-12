'use strict';
// The following is the grading policy
// 1) Every student has a grade from 0 - 100
// 2) Less than 40 is failing
//
// Professor Aaron likes grade differently  by rounding up grades:
// 1) if the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5
// 2) if the grade is less than 38 no rounding occurs as the result will still be failing
//
// Given initial values for each of Sam's N students, write code to automate the rounding process
// Input = array
// output is array
// First input is the number of students, the rest are grades
// [4,73,67,38,33] => [75,67,40,33]

function gradingStudents(array){

  if(!Array.isArray(array)){
    return 'Improper input';
  }

  const l = array.splice(0,1)[0];

  if(l !== array.length){
    return 'Improper amount of inputs found';
  }

  for( let i = 0; i < l; i++){
    array[i] = round(array[i])
  }
  return array;
}


function round(grade){
  if (typeof(grade)!== 'number'){
    return 'Improper input';
  }
  if( grade > 37 ){
    let remainder = grade%5;
    if(remainder>2){
      grade+= 5-remainder;
    }
  }
  return grade;
}
module.exports = {gradingStudents, round};