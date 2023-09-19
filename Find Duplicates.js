function duplicates(arr) {
    return [...new Set(arr.filter((el, i, arr) => arr.indexOf(el) !== i))]
}

console.log(duplicates([1, 2, 3, 3, 2, 1]));//, [3, 2, 1]