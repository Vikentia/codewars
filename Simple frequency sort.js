function solve(arr) {
    let res = []
    let obj = {};
    arr.forEach(e => obj[e] ? obj[e] += 1 : obj[e] = 1)
    Object
        .entries(obj)
        .sort((a, b) => a[1] === b[1] ? +a[0] - +b[0] : b[1] - a[1])
        .forEach(e => {
            for (let i = 0; i < e[1]; i++) {
                res.push(+e[0])
            }
        })
    return res
}

console.log(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0]));//[0,0,4,4,9,9,3,5,7,8]
console.log(solve([0, 0, 8, 8, 18, 18, 22, 22, 35, 35, 40, 40, 3, 7, 11, 15, 19, 20, 24, 25, 26, 31, 37, 38, 42, 43, 47]));//