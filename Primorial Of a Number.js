function numPrimorial(n) {
    const arr = []
    let count = 2;
    while (arr.length < n) {
        if (isPrime(count)) arr.push(count)
        count++
    }
    return arr.reduce((acc, item) => acc * item, 1)
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(numPrimorial(8));//9699690