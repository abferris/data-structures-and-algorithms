function allLongestStrings(inputArray) {
  var longestArrays= [inputArray[0]];
  for (var i=1; i<inputArray.length; i++){
      var a= inputArray[i];
      var b= longestArrays[0];
      if (a.length>b.length){
          longestArrays=[]
          longestArrays.push(a);
      }
      if (a.length===b.length){
          longestArrays.push(a)
      }
  }
  return(longestArrays)
}

module.exports = allLongestStrings