function numberOfPairs(gloves) {
    let count = 0
    let arr = []
    gloves.forEach(item => {
        if (arr.includes(item)) {
            count++;
            arr.splice(arr.indexOf(item), 1)
        } else {
            arr.push(item)
        }
    })
    return count
}

console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']));