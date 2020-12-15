const SortedArray  = require('./sorted_array')

describe('insert', () => {
  test('inserts into an empty array', () => {
    const result = SortedArray.insert([], 2)
    expect(result).toEqual([2])
  })

  test('correctly inserts into an array with one element', () => {
    const result = SortedArray.insert([5], 3)
    expect(result).toEqual([3, 5])
  })

  test('inserts into array with multiple elements', () => {
    const mock = [1, 2, 4, 8, 16]
    const result = SortedArray.insert(mock, 7)
    expect(result).toEqual([1, 2, 4, 7, 8, 16])
  })
})


describe('search', () => {
 test('returns false with an empty array', () => {
   const result = SortedArray.search([], 2)
   expect(result).toEqual(false)
 })

 test('returns true if the element is found', () => {
   const mock = [1, 2, 3, 4]
   const result = SortedArray.search(mock, 2)
   expect(result).toEqual(true)
 })

 test('returns false if the element is not found', () => {
   const mock = [1, 2, 3, 4]
   const result = SortedArray.search(mock, 10)
   expect(result).toEqual(false)
 })
})
