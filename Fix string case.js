function solve(s) {
    let num = 0
    s.split('').forEach(item => item === item.toUpperCase() ? num++ : num--)
    return num > 0 ? s.toUpperCase() : s.toLowerCase()
}
console.log(solve("code"));
console.log(solve("CODe"));
console.log(solve("COde"));
console.log(solve("Code"));