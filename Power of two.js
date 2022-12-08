function isPowerOfTwo(n) {
    if (!n) return false
    while (n % 2 === 0) {
        n /= 2
    }
    return n === 1
}

console.log(isPowerOfTwo(4096));