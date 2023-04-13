function beggars(values, n) {
    const res = [];
    for (let i = 0; i < n; i++) {
        const arr = [];
        for (let j = i; j < values.length; j = j + n) {
            arr.push(values[j])
        }
        const count = arr.reduce((a, b) => a + b, 0)
        res.push(count)
    }
    return res;
}

console.log(beggars([1, 2, 3, 4, 5], 3));//[5,7,3]
console.log(beggars([1, 2, 3, 4, 5], 6));//[1,2,3,4,5,0]