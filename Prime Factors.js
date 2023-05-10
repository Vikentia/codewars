function primeFactors(n) {
    const res = []
    while (n !== 1) {
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                res.push(i)
                n = n / i
                break;
            }
        }
    }
    return res
}

console.log(primeFactors(1));
console.log(primeFactors(3));
console.log(primeFactors(8));
console.log(primeFactors(9));
console.log(primeFactors(12));