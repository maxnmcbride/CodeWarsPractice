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
function boolToWord(bool) {
  return (bool === true ? "Yes" : "No")
}

// This can acutally be shortened to return (bool ? "Yes" : "No") as the question of true is implicit

// 4. Summation
var summation = function (num) {
  // Code here
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i
  };
  return sum
}

// 5. Rock Paper Scissors
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!"
  } else if (
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "rock" && p2 === "scissors")) {
    return "Player 1 won!"
  } else {
    return "Player 2 won!"
  }
};

// 6. String Repeat
function repeatStr(n, s) {
  return s.repeat(n);
}

// 7. Function 1 - Hello World
const greet = () => "hello world!";

// 8. MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase()
}

// 9. Thinkful Logic Drills - Traffic Lights
function updateLight(current) {

  //your code here!
  if (current === "green") {
    return "yellow"
  } else if (current === "yellow") {
    return "red"
  } else if (current === "red") {
    return "green"
  }

}

// 10. Convert a number to a string
function numberToString(num) {
  return num.toString()
}

// 11. You Can't Code Under Pressure
function doubleInteger(i) {
  return i * 2;
}

// 12. How Good Are You Really?
function betterThanAverage(classPoints, yourPoints) {
  let average = (classPoints.reduce((prev, curr) => prev + curr) / (classPoints.length))
  return (yourPoints > average ? true : false)
}

// 13. You Only Need One - Beginner
function check(a, x) {
  return (a.includes(x) ? true : false)
}

// 14. Opposites Attract
function lovefunc(flower1, flower2) {
  let petals1 = (flower1 % 2 == 0);
  let petals2 = (flower2 % 2 == 0);
  return (petals1 !== petals2 ? true : false)
}

// function lovefunc(flower1, flower2) {
// return flower1 % 2 !== flower2 % 2; }

// 15. Calculate Average
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    const sum = array.reduce((total, num) => total + num);
    return sum / array.length;
  }
}

// 16. Reversed Sequence
const reverseSeq = n => {
  let arr = [];
  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  return arr;
}

// 17. Return Negative
function makeNegative(num) {
  return (num <= 0 ? num : num * -1)
}

// 18. Opposite Number
function opposite(number) {
  return(number * -1);
}

// 19. Beginner - Reduce but Grow
grow = x => (x.reduce((prev , curr) => prev * curr));

// 20. Simple multiplication
function simpleMultiplication(number) {
  if ( number % 2 === 0 ) {
    return number * 8
  } else {
    return number * 9
  }
}

// simpleMultiplication = number => ( number % 2 === 0 ? number * 8 : number * 9 ) 

// 21. Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}

// 22. Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  let cm = (s/0.036)
  return Math.floor(cm)
}










