function factorial(n) {
    return n === 1 ? n : n * factorial(n - 1)
}
// function factorial(n) {
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         arr.push(i)
//     }
//     return arr.reduce((acc, item) => acc * item, 1)
// }

console.log(factorial(5));