function sumTriangularNumbers(n) {
    let num = 0
    let res = 0
    for (let i = 1; i <= n; i++) {
        num += i
        res += num
    }
    return res
}

console.log(sumTriangularNumbers(6));//56
console.log(sumTriangularNumbers(34));//7140