function arraySum(arr) {
    return arr.flat(10).filter(Number).reduce((acc, item) => acc + item, 0)
}

console.log(arraySum([1, 2, [1, 2]]));