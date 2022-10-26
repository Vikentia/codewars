const runLengthEncoding = str => {
    let result = []
    str = str.split('').forEach((item, ind, arr) => {
        if (item === arr[ind - 1] && ind) {
            let lastInd = result.length - 1
            result[lastInd][0] += 1
        } else {
            result.push([1, item])
        }
    })
    return result
}

console.log(runLengthEncoding(""));
console.log(runLengthEncoding("abc"));
console.log(runLengthEncoding("aab"));
console.log(runLengthEncoding("hello world!"));