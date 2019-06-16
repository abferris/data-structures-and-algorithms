function firstDuplicate(a) {
  var dup = -1;
  var hash ={};
  for (var i=0; i<a.length; i++){
      var num = a[i];
      if (hash[num]){
          dup= num;
          return num;
      }
      else{
          hash[num] =true;
      }
  }
  return(dup)
}

module.exports = firstDuplicate