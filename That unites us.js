function thatUnitesUs(array1, array2, n) {
    return [...new Set(array1.concat(array2))].sort().filter((e, i) => i < n)
}

console.log(thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2));