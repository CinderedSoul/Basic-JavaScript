// Do not change any of the function names

const getBiggest = (x, y) => {
  if (x === y || x > y) {
    return x;
  }
  return y;
};

const greeting = (language) => {
  if (language === 'German') {
    return 'Guten Tag!';
  }
  if (language === 'Chinese') {
    return 'Ni Hao!';
  }
  if (language === 'Spanish') {
    return 'Hola!';
  }
  return 'Hello!';
};

const isTenOrFive = (num) => {
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
};

const isInRange = (num) => {
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
  // return true if num is less than 50 and greater than 20
};

const isInteger = num => num === Math.floor(num);

const fizzBuzz = (num) => {
  if (num % 5 === 0 && num % 3 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
};

const isPrime = (num) => {
  let start = 2;
  while (start <= Math.sqrt(num)) {
    if (num % start++ < 1) return false;
  }
  return num > 1;
};

const returnFirst = (arr) => {
  return arr[0];
  // return the first item from the array
};

const returnLast = (arr) => {
  return arr[arr.length - 1];
  // return the last item of the array
};

const getArrayLength = (arr) => {
  return arr.length;
  // return the length of the array
};

const incrementByOne = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
};

const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const wordsToSentence = (words) => {
  return words.join(' ');
};

const contains = (arr, item) => {
  return arr.indexOf(item) > -1;
};

const addNumbers = (numbers) => {
  const sum = numbers.reduce((total, amount) => total + amount);
  return sum;
  // numbers is an array of integers.
  // add all of the integers and return the value
};

const averageTestScore = (testScores) => {
  let base = 0;
  for (let i = 0; i < testScores.length; i++) {
    base += testScores[i];
  }
  return (base / testScores.length);
};

const largestNumber = (numbers) => {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i];
      return largest;
    }
  }
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
