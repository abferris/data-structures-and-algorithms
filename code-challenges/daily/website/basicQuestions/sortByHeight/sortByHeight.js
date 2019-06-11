function sortByHeight(a) {
  let notrees = a.filter(word => word!== -1)
  notrees.sort(function(a, b){return a - b})
  console.log(notrees)
  let i = 0;
  let j = 0;
  while (i < a.length){
    if (a[i]!== -1){
      a[i] = notrees[j]
      j++
    }
    i++
  }
  return a
}

module.exports = sortByHeight