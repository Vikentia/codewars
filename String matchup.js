function solve(a, b) {
    return b.map(el => a.filter(e => e === el).length)
}
console.log(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap']));//[2, 1, 0]