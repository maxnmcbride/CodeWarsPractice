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
  return (number * -1);
}

// 19. Beginner - Reduce but Grow
grow = x => (x.reduce((prev, curr) => prev * curr));

// 20. Simple multiplication
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8
  } else {
    return number * 9
  }
}

// simpleMultiplication = number => ( number % 2 === 0 ? number * 8 : number * 9 ) 

// 21. Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

// 22. Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  let cm = (s / 0.036)
  return Math.floor(cm)
}

// 23. Two Sum
function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
}

// this was written by ChatGPT I am actually not sure of how to handle this

function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// 24. Sum Arrays
function sum(numbers) {
  if (numbers.length == 0) {
    return 0
  }
  let total = 0;
  numbers.map((i) => { total += i })
  return total;
};

// another option is reduce as seen below
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// 25. Grasshopper - Debug sayHello
function sayHello(name) {
  return 'Hello, ' + name
}

const sayHello = name => `Hello, ${name}`;

// 26. Split Strings
function solution(str) {
  let pairs = [];

  for (let i = 0; i < str.length; i += 2) {
    let pair = str.slice(i, i + 2);

    if (pair.length === 1) {
      pair += '_';
    }
    pairs.push(pair);
  }
  return pairs;
}

// 27. Transportation on vacation
function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50
  } else if (d >= 3 && d < 7){
    return(d * 40) - 20
  } else {
    return (d * 40)
  }
}

// alternative single line solution
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

// 28. Who likes it?
function likes(names) {
  if (names.length === 0) {
    return "no one likes this"
  } else if (names.length === 1) {
    return `${names} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

// 29. Grasshopper - Personalized Message
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

// 30. Replace With Alphabet Position

function alphabetPosition(text) {
  let result = "";
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    let position = alphabet.indexOf(char) + 1;
    
    if (position > 0) {
      result += position + " ";
    }
  }
  result = result.trim();

  // 31. Is a number prime?
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

// 32. Parse nice int from char problem
const getAge = (inputString) => parseInt(inputString);

// 33. Keep Hydrated!
function litres(time) {
  return Math.floor(time * .5);
}

// 34. Area or Perimeter
const areaOrPerimeter = function(l , w) {
  if (l === w){
    return (l * w)
  } else {
    return (l * 2) + (w * 2)
  }
};

// 35. Reversed Strings
function solution(str){
  return str.split("").reverse().join("");
 }

// 36. Sum of Positive
function positiveSum(arr) {
  let sumPositives = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      sumPositives += arr[i];
    }
  }
  return sumPositives
}

// 37. Five without numbers
function unusualFive() {
  const five = "fffff"
  return five.length;
}

