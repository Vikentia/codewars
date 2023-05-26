function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function step(g, m, n) {
    for (let i = m; m <= n - g; i++) {
        if (isPrime(i) && isPrime(i + g)) {
            return [i, i + g]
        }
    }
    return []
}


console.log(step(2, 5, 7));// [5,7]
console.log(step(10, 300, 400));// [307, 317]

