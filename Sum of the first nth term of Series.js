function SeriesSum(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += (1 / (3 * i - 2))
    }
    return res.toFixed(2) + ''
}

console.log(SeriesSum(4));//1,49