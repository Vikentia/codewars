function zipWith(fn, a0, a1) {
    const arr = []
    let d = Math.min(a0.length, a1.length)
    for (let i = 0; i < d; i++) {
        arr.push(fn(a0[i], a1[i]))
    }
    return arr
}
const plus = (a, b) => a + b;
console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]));
console.log(zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1]));
console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2]));