const sumAll = function(start, end) {
    let sum = 0
    for(let i = 0; i < end; i++) {
        sum += start
        start++
    }
    return sum

};

console.log(sumAll(1,5))

// Do not edit below this line
module.exports = sumAll;
