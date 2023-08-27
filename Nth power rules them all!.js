function modifiedSum(a, n) {
    return a.map(e => e ** n).reduce((acc, item) => acc + item, 0) - a.reduce((acc, item) => acc + item, 0)
}

console.log(modifiedSum([1, 2, 3], 3));//30