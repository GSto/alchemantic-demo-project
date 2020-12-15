module.exports.insert = function(arr, item){
  let low = 0
  let high = arr.length

  while(low < high) {
    let mid = (low + high) >>> 1
    if(arr[mid] < item) {
       low = mid + 1
    } else {
      high = mid
    }
  }
  return [
    ...arr.slice(0, low),
    item,
    ...arr.slice(low)
  ]
}

module.exports.search = function(haystack, needle) {
  let low = 0
  let high = haystack.length - 1
  while(low <= high) {
    let mid = (low + high) >>> 1
    if (haystack[mid] === needle) return true
    
    if (haystack[mid] < needle) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return false
}