function findMissing(arr1, arr2) {
    arr2.forEach(item => arr1.splice(arr1.indexOf(item), 1))
    return arr1[0]
}

console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));