function repeats(arr) {
    return arr.reduce((acc, item, i, array) => array.indexOf(item) === array.lastIndexOf(item) ? acc + item : acc, 0)
};

console.log(repeats([9, 10, 19, 13, 19, 13]));//19