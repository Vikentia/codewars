function getSumOfDigits(integer) {
    return integer.toString().split('').reduce((acc, item) => acc + +item, 0)
}

console.log(getSumOfDigits(123));