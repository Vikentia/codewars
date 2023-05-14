var fizzBuzzCustom = function (stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) {
    const arr = []
    for (let i = 1; i <= 100; i++) {
        if (i % numOne === 0 && i % numTwo === 0) {
            arr.push(stringOne + stringTwo)
        } else if (i % numOne === 0) {
            arr.push(stringOne)
        } else if (i % numTwo === 0) {
            arr.push(stringTwo)
        } else {
            arr.push(i)
        }
    }
    return arr
};

console.log(fizzBuzzCustom()[44]);