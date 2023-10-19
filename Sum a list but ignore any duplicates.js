function sumNoDuplicates(numList) {
    return numList.reduce((acc, item, i, arr) => arr.indexOf(item) === arr.lastIndexOf(item) ? acc + item : acc, 0)
}

console.log(sumNoDuplicates([1, 1, 2, 3]));//5