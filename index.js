const fs = require('fs')
const readline = require('readline')
const SortedArray = require('./sorted_array.js')
const EntrySearch = require('./entry_search.js')

let data = []
let pairResult = null
let tripletResult = null

const TARGET_SUM = 2020

const rl = readline.createInterface({
  input: fs.createReadStream(__dirname+'/input.txt', 'utf8'),
  output: process.stdout,
  terminal: false
})

rl.on('line', (input) => {
  const value = parseInt(input)

  // check for pairs
  if(!pairResult) {
    pairResult = EntrySearch.findPairProduct(data, value, TARGET_SUM)
  }

  // check for triplets
  if(!tripletResult) {
    tripletResult = EntrySearch.findTripletProduct(data, value, TARGET_SUM)
  }

  data = SortedArray.insert(data, value)

  if(pairResult && tripletResult) {
    rl.close()
  }
})

rl.on('close', () => {
  console.log('part 1 result: ', pairResult)
  console.log('part 2 result: ', tripletResult)
})