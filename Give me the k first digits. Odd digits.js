function findOddDigits(n, k) {
    let arr = ('' + n).split('').filter(e => e % 2);
    return arr.length >= k ? +arr.join('').slice(0, k) : 0
}

console.log(findOddDigits(123456789111, 5));//13579
console.log(findOddDigits(7459274655920285, 8));//75975595