function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((acc, item) => acc + +item, 0)
}

console.log(sumDigits(-32));