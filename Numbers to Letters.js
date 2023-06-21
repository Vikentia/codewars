function switcher(x) {
    return x.map(el => el === '27' ? '!' : el === '28' ? '?' : el === '29' ? ' ' : String.fromCharCode((Math.abs(+el - 27)) + 96)).join('')
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));//'codewars'   3, 15,  4,  5, 23,  1, 18, 19
console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']));//'btswmdsbd kkw'
