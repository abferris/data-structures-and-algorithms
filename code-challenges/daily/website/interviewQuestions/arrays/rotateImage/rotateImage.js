function rotateImage(a) {
  return a.map((row,idx) => {
      return a.map((val) => {
          return val[idx]
      }).reverse()
  })
  
}

module.exports = rotateImage