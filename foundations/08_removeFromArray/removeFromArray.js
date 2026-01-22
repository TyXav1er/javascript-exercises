const removeFromArray = function(arr, num) {
    let returnedArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== num) {
            returnedArr.push(arr[i])
        }
    }
    return returnedArr

};

const arr = [1, 2, 3, 4, 5, 6]
console.log(removeFromArray(arr, 3))

// Do not edit below this line
module.exports = removeFromArray;
