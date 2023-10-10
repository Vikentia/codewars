function consecutive(array) {
    if (array.length < 2) return 0
    let [start, end] = [Math.min(...array), Math.max(...array)]
    let arr = []
    for (let i = start + 1; i < end; i++) {
        if (!array.includes(i)) arr.push(i)
    }
    return arr.length;
}

console.log(consecutive([4, 8, 6]));