const EntrySearch = require('./entry_search.js')

describe('findPairProduct', () => {
  test('returns the product of two numbers if the value and one element in the array add up to the total', () => {
    const mockData = [1, 2, 3]
    const mockTotal = 6
    const result = EntrySearch.findPairProduct(mockData, 4, mockTotal) // 4 * 2 = 8
    expect(result).toEqual(8)
  })

  test('returns null if there are no pairs that add up to the total', () => {
    const mockData = [1, 2, 3]
    const mockTotal = 20
    const result = EntrySearch.findPairProduct(mockData, 4, mockTotal) 
    expect(result).toBeNull()
  })
})

describe('findTripletProduct', () => {
  test('returns the product if the value and two elements in the array add up to the total', () => {
    const mockData = [1, 2, 3]
    const mockTotal = 9
    const result = EntrySearch.findTripletProduct(mockData, 4, mockTotal) // 4 * 3 * 2 = 24
    expect(result).toEqual(24)
  })

  test('returns null if there are no valid triplets', () => {
    const mockData = [1, 2, 3]
    const mockTotal = 99
    const result = EntrySearch.findTripletProduct(mockData, 4, mockTotal) // 4 * 3 * 2 = 24
    expect(result).toBeNull()
  })
})