const removeFromArray = function(array) {
    const newArray = []
    array.forEach((item) => {
        if(!arguments.includes(item)) {
            newArray.push(item)
    }
})
return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
