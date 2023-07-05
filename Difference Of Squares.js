function differenceOfSquares(n) {
    let s = 0
    let s2 = 0
    for (let i = 1; i <= n; i++) {
        s += i ** 2
        s2 += i
    }
    return s2 ** 2 - s
}

console.log(differenceOfSquares(100));//25164150