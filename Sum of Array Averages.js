const sumAverage = (arr) => {
    return Math.floor(arr.map((e) => e.reduce((acc, item) => acc + item, 0) / e.length).reduce((acc, item) => acc + item, 0))
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]));//44