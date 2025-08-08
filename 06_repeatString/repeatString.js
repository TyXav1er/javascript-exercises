const repeatString = function(word, count) {
    let string = ""

    for(let i = 0; i < count; i++){
        string += word
    }
    return string
};

console.log(repeatString("Wazzahhhh", 3))

// Do not edit below this line
module.exports = repeatString;
