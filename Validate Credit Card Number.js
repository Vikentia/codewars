function validate(n) {
    let a = n.length % 2
    let arr = ('' + n).split('')
    for (let i = arr.length - 2; i >= 0; i = i - 2) {
        arr[i] = arr[i] * 2
        if (arr[i] > 9) arr[i] = arr[i] - 9
    }
    return arr.reduce((acc, item) => acc + +item, 0) % 10 === 0
}

console.log(validate(123));
console.log(validate(1));
console.log(validate(2121));
console.log(validate(1230));