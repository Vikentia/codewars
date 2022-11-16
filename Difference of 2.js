function twosDifference(input) {
    const res = []
    input.map((item, ind) => {
        if (input.includes(item + 2, ind)) {
            res.push([item, item + 2])
        }
        if (input.includes(item - 2, ind)) {
            res.push([item - 2, item])
        }
    })
    return res.sort((a, b) => a[0] - b[0])
}

console.log(twosDifference([1, 2, 3, 4]));//[[1,3],[2,4]]
console.log(twosDifference([1, 3, 4, 6]));//[[1,3],[4,6]]
console.log(twosDifference([4, 1, 2, 3]));//[[1, 3], [2, 4]]