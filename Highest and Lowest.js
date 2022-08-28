function highAndLow(numbers) {
    numbers = numbers.split(' ').sort((a, b) => b - a)
    return numbers[0] + ' ' + numbers[numbers.length - 1]
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));