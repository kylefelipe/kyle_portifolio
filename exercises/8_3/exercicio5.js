const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo
const swap = ([item1, item2, item3]) => [item3, item2, item1];

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)
