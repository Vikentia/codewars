function adjacentElementsProduct(array) {
    let max
    for (let i = 0; i < array.length - 1; i++) {
        max = max > array[i] * array[i + 1] ? max : array[i] * array[i + 1]
    }
    return max
}

console.log(adjacentElementsProduct([1, 5, 10, 9]));