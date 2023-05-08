var numberFormat = function (number) {
    const minus = number < 0 ? '-' : '';
    const res = []
    const arr = Math.abs(number).toString().split('')
    while (arr.length % 3) arr.unshift(' ')
    for (let i = 0; i < arr.length; i += 3) {
        res.push(arr[i] + arr[i + 1] + arr[i + 2])
    }
    return minus + res.join(',').trim()
};

console.log(numberFormat(100000));
console.log(numberFormat(5678545));
console.log(numberFormat(-420902));