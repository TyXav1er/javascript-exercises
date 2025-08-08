const convertToCelsius = function(temp) {
  return (temp - 32) * 5/9
};
console.log(convertToCelsius(32))

const convertToFahrenheit = function(temp) {
  return (temp * (9/5) + 32)
};

console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
