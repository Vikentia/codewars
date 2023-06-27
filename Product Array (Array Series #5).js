function productArray(numbers) {
    const mult = numbers.reduce((acc, item) => acc * item, 1)
    return numbers.map(el => mult / el)
}

console.log(productArray([3, 27, 4, 2]));//[216,24,162,324]