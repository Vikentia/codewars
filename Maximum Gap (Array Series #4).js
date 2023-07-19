function maxGap(numbers) {
    let max = 0
    numbers.sort((a, b) => a - b)
    for (let i = 0; i < numbers.length - 1; i++) {
        max = max > Math.abs(numbers[i] - numbers[i + 1]) ? max : Math.abs(numbers[i] - numbers[i + 1])
    }
    return max
}

console.log(maxGap([130, 30, 50]));//80
console.log(maxGap([-1, -1, -1]));//0