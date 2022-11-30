function findLongest(array) {
    return array.filter(i => i.toString().length === Math.max(...array).toString().length)[0]
}

console.log(findLongest([9000, 8, 800]));