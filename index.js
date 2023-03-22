// 1. Invert values - my solution
function invert(array) {
    return array.map(num => num * -1)
 }

// 2. A Needle In The Haystack
function findNeedle(haystack) {
    let index = haystack.indexOf('needle')
    return `found the needle at position ${index}`
  }

//   3. Convert Boolean Values to "Yes" or "No"
function boolToWord( bool ){
    return (bool === true ? "Yes" : "No")
  }

// This can acutally be shortened to return (bool ? "Yes" : "No") as the question of true is implicit