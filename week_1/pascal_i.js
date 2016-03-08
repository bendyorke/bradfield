#! /usr/bin/env node

/**
 * Pascal's Triangle I:
 *
 * https://leetcode.com/problems/pascals-triangle/
 *
 * Given numRows, generate the first numRows of Pascal's triangle.
 *
 * For example, given numRows = 5, return
 *
 * [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
 */

function nextRow(previousRow) {
  if (!previousRow) return [1]

  var inner = previousRow
    .slice(1)
    .map(function(n, i) { return n + previousRow[i] })

  return [1].concat(inner, [1])
}

/**
 * Exponential(ish) growth over time
 * Geometric growth in space
 */
function pascal(n) {
  if (n === 0) return []

  var lastTri = pascal(n - 1)
  var lastRow = lastTri[lastTri.length  - 1]
  return lastTri.concat([nextRow(lastRow)])
}

module.exports = pascal

if (require.main === module && typeof process !== 'undefined') {
  var argv = process.argv
  var n = argv[argv.length - 1]

  console.log(pascal(n))
}
