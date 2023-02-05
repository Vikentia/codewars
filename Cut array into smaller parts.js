function makeParts(arr, chunkSize) {
    let res = []
    let array = []
    arr.forEach((item, i) => {
        array.push(item);
        if (array.length === chunkSize) {
            res.push(array)
            array = []
        }
        if (i === arr.length - 1 && array.length) res.push(array)
    })
    return res
}

console.log(makeParts([1, 2, 3, 4, 5], 2));