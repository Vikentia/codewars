function findDup(arr) {
    return arr.filter((e, i) => arr.indexOf(e) !== arr.lastIndexOf(e))[0]
}

console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]));//5