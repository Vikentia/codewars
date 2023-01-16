function minSum(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    while (arr.length) {
        sum += arr.shift() * arr.pop()
    }
    return sum;
}

console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));//74
console.log('--');
console.log(minSum([12, 6, 10, 26, 3, 24]));//342