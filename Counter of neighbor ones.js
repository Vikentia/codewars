// Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

function onesCounter(input) {
    return input.join('').split('0').map(item => item.length).filter(item => item)
}

console.log(onesCounter([0, 0, 0, 0, 0, 0, 0, 0]));
console.log(onesCounter([1, 1, 1, 1, 1]));
console.log(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0]));