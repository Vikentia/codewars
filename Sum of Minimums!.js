function sumOfMinimums(arr) {
    return arr.map(el => el.sort((a, b) => a - b)).reduce((acc, item) => acc + item[0], 0)
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));