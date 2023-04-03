function halvingSum(n) {
    return n === 1 ? n : n + halvingSum(Math.floor(n / 2))
}

console.log(halvingSum(127));//247