function minimumSteps(numbers, value) {
    const arr = []
    numbers.sort((a, b) => a - b)
    for (let i = 0; i < numbers.length; i++) {
        arr.push(numbers[i])
        if (arr.reduce((acc, item) => acc + item, 0) >= value) return arr.length - 1
    }
}

console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));//8
console.log(minimumSteps([4, 6, 3], 2));//0