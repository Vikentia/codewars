function factorial(n) {
    let count = 1;
    if (!n) return count
    if (n < 0 || n > 12) { throw new RangeError('Error') }
    for (let i = 1; i <= n; i++) {
        count *= i
    }
    return count
}

console.log(factorial(-3));