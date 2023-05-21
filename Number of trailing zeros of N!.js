function zeros(n) {
    let count = 0
    for (let i = 5; i <= n; i *= 5) {
        count += Math.floor(n / i);
    }
    return count
}

console.log(zeros(30));//7
console.log(zeros(12));//2