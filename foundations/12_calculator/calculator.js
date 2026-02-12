const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, currentItem) => 
    total + currentItem, 0);
};

const multiply = function (a, b) {
  return a * b;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

console.log((2, 5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
