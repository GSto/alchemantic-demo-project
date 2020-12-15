const SortedArray = require('./sorted_array.js')

module.exports.findPairProduct = function(data, value, total) {
  const inverse = total - value
  if(SortedArray.search(data, inverse)) {
    return value * inverse
  }
  return null
}

module.exports.findTripletProduct = function(data, value, total) {
  for(let second of data) {
    const inverse = total - value - second
    if(SortedArray.search(data, inverse)) {
      return value * second * inverse
    }
  }
  return null
}