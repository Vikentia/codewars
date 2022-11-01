function getScore(n) {
    return n > 1 && n <= 10000 ? 50 * n + getScore(n - 1) : 50
}

console.log(getScore(1));
console.log(getScore(2));
console.log(getScore(3));
console.log(getScore(4));