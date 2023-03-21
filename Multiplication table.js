multiplicationTable = function (size) {
    const res = []
    for (let i = 1; i <= size; i++) {
        const arr = []
        for (let j = 1; j <= size; j++) {
            if (!res.length) {
                arr.push(j)
            } else {
                arr.push(i * j)
            }
        }
        res.push(arr)
    }
    return res
}

console.log(multiplicationTable(3));//[[1,2,3], [2,4,6], [3,6,9]]