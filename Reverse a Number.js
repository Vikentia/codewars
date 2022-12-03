function reverseNumber(n) {
    let sign = n < 0 ? '-' : ''
    return +(sign + +Math.abs(n).toString().split('').reverse().join(''))
}
console.log(reverseNumber(-123));
console.log(reverseNumber(1000));