function rowWeights(array) {
    const res = [0, 0]
    array.forEach((el, i) => i % 2 ? res[1] += el : res[0] += el)
    return res
}

console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));//[211,164]
console.log(rowWeights([80]));//[80,0]