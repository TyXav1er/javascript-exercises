const leapYears = function (year) {
  let isYearDivisibleByFour = year % 4 === 0
  let isCentury = year % 100 === 0
  let yearDivisibleByFourHundred = year % 400 === 0

  if (isYearDivisibleByFour && (yearDivisibleByFourHundred || !isCentury)) {
    return year + " is a leap year"
  } else {
    return year + " is not a leap year"
  }
};
console.log(leapYears(400));

// Do not edit below this line
module.exports = leapYears;
