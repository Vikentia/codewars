function fizzbuzz(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        if (!(i % 3) && !(i % 5)) {
            arr.push("FizzBuzz")
        } else if (!(i % 3) && i % 5) {
            arr.push("Fizz")
        } else if (!(i % 5) && i % 3) {
            arr.push('Buzz')
        } else {
            arr.push(i)
        }
    }
    return arr
}

console.log(fizzbuzz(10));