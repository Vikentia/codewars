function betweenExtremes(numbers) {
    numbers.sort((a, b) => a - b)
    return numbers[numbers.length - 1] - numbers[0]
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));//42