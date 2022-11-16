function getDivisorsCnt(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        n % i || arr.push(i)
    }
    return arr.length
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));