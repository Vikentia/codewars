function largestPower(n) {
    let k = 0
    for (; (3 ** k) < n; k++) { }
    return k - 1
}

console.log(largestPower(5));//1
console.log(largestPower(81));//3
console.log(largestPower(82));//4