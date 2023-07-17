function minimumNumber(numbers) {
    let d = numbers.reduce((a, b) => a + b)
    let n = d;
    while (!isPrime(n)) {
        n++
    }
    return n - d;
};

function isPrime(d) {
    if (d < 2) return false;
    for (let i = 2; i < d; i++) {
        if (d % i === 0) return false
    }
    return true
}

console.log(minimumNumber([50, 39, 49, 6, 17, 28]));//2
