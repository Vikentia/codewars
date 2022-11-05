function deleteDigit(n) {
    let max = 0
    for (let i = 0; i < String(n).length; i++) {
        let arr = String(n).split('')
        delete arr[i]
        let digit = +arr.join('')
        max = digit > max ? digit : max
    }
    return max
}

console.log(deleteDigit(152));
console.log(deleteDigit(1001));
console.log(deleteDigit(10));