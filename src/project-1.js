// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  const sum = num * 10;
  return sum;
};

const subtractFive = (num) => {
  const sum = num - 5;
  return sum;
};

const areSameLength = (str1, str2) => {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
};

const areEqual = (x, y) => {
  if (x === y) {
    return true;
  }
  return false;
};

const lessThanNinety = (num) => {
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = (num) => {
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  const sum = x + y;
  return sum;
};

const subtract = (x, y) => {
  const sum = x - y;
  return sum;
};

const divide = (x, y) => {
  const sum = x / y;
  return sum;
};

const multiply = (x, y) => {
  const sum = x * y;
  return sum;
};

const getRemainder = (x, y) => {
  const sum = x % y;
  return sum;
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = (num) => {
  if (num % 2 === 1) {
    return true;
  }
  return false;
};

const square = (num) => {
  const timesTwo = Math.pow(num, 2);
  return timesTwo;
};

const cube = (num) => {
  const timesThree = Math.pow(num, 3);
  return timesThree;
};

const raiseToPower = (num, exponent) => {
  const thePower = Math.pow(num, exponent);
  return thePower;
};

const roundNumber = (num) => {
  const round = Math.round(num);
  return round;
};

const roundUp = (num) => {
  const roundedUp = Math.ceil(num);
  return roundedUp;
};

const addExclamationPoint = (str) => {
  const shoutIt = `${str}!`;
  return shoutIt;
};

const combineNames = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
};

const getGreeting = (name) => {
  const greeting = `Hello ${name}!`;
  return greeting;
};

const getRectangleArea = (length, width) => {
  const rectangular = length * width;
  return rectangular;
};

const getTriangleArea = (base, height) => {
  const triangle = base * height;
  const divded = triangle / 2;
  return divded;
};

const getCircleArea = (radius) => {
  const circleArea = Math.round(Math.PI * Math.pow(radius, 2));
  return circleArea;
};

const getRectangularPrismVolume = (length, width, height) => {
  const prismRVolume = length * width * height;
  return prismRVolume;
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
