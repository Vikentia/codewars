function dataReverse(data) {
    let arr = [];
    while (data.length) {
        arr.push(...data.slice(-8))
        data.length -= 8
    }
    return arr
}

console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]));