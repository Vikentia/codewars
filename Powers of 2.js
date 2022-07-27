// Complete the function that takes a non - negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n(inclusive).

function powersOfTwo(n) {
    return new Array(n + 1).fill(2).map((item, index) => item ** index)
}

console.log(powersOfTwo(4));