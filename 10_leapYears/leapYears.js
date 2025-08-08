const leapYears = function(year) {
    if(year % 4 === 0) {
        return `The year ${year} is a leap year`
    } else {
        return `The year ${year} is not a leap year`
    }
};

console.log(leapYears(2023))

// Do not edit below this line
module.exports = leapYears;
