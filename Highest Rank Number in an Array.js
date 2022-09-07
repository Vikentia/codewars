function highestRank(arr) {
    let result = {}
    let arr2 = [...new Set(arr)].sort((a, b) => a - b)
    arr2.forEach(item => result[item] = (arr.filter(el => item === el)).length)
    let max = Math.max(...Object.values(result))
    let arr3 = Object.entries(result).filter(item => item[1] === max)
    return +arr3[arr3.length - 1][0]
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
console.log(highestRank([2, 1, 2, 1, 2, 1]));