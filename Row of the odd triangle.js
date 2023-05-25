function oddRow(n) {
    const start = n * n - (n - 1);
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(start + 2 * i)
    }
    return res
}

console.log(oddRow(13));