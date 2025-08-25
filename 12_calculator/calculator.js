const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
return a - b
};

const sum = function(arr) {
	return arr.reduce((total, current) => {
    return total + current
  }, 0)
};

let arr = [1, 2, 3]
console.log(sum(arr))

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current)
};

console.log(multiply(arr))

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	let product = 1
  for (let i = n; i > 0; i--) {
    product *= 1
  }
  return product
};

console.log(factorial(4))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
