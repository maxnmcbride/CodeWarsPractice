// 1. Invert values - my solution
function invert(array) {
    return array.map(num => num * -1)
 }

// 2. A Needle In The Haystack
function findNeedle(haystack) {
    let index = haystack.indexOf('needle')
    return `found the needle at position ${index}`
  }

//   3.