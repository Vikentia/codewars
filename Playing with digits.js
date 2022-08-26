function digPow(n, p) {
    let pow = p - 1
    let num = ('' + n).split('').map(item => {
        pow++
        return item ** pow
    }).reduce((acc, item) => acc + item, 0)
    return (num / n % 1) === 0 ? num / n : -1
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));