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

// 4. Summation
var summation = function (num) {
  // Code here
  let sum = 0;
  for (i = 1; i <= num; i++){
    sum += i};
  return sum
}

// 5. Rock Paper Scissors
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!"
    } else if (
     (p1 === "paper" && p2 === "rock") ||
     (p1 === "scissors" && p2 === "paper") ||
     (p1 === "rock" && p2 === "scissors")){
       return "Player 1 won!"
     } else { 
       return "Player 2 won!"
     }
    };

    // 6. String Repeat
    function repeatStr (n, s) {
      return s.repeat(n);
    }

    // 7. Function 1 - Hello World
    const greet = () => "hello world!";

    // 8. MakeUpperCase
    function makeUpperCase(str) {
      return str.toUpperCase()
    }

    



