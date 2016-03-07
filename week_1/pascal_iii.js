#! /usr/bin/env node

/**
 * Pascal's Triangle III:
 *
 * Create a generator function that will generate
 * each row of pascal's triangle
 *
 * For example:
 * pascal().next().next().next().value
 * // [1, 2, 1]
 */

function* pascal(prevRow) {
  var nextRow = (prevRow || [])
    .map((x, i) => x + (prevRow[i - 1] || 0))
    .concat([1])

  yield nextRow
  yield* pascal(nextRow)
}

module.exports = pascal

if (require.main === module && process) {
  var argv = process.argv
  var n = argv[argv.length - 1]
  var gen = pascal()

  while(n--) {
    console.log(gen.next().value)
  }
}
