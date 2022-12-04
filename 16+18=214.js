function add(num1, num2) {
    let arr = []
    String(num1).length > String(num2).length
        ? num2 = '0'.repeat(String(num1).length - String(num2).length) + num2
        : num1 = '0'.repeat(String(num2).length - String(num1).length) + num1
    num1 = num1.toString().split('')
    num2 = num2.toString().split('')
    for (let i = num1.length - 1; i >= 0; i--) {
        arr.unshift(+num1[i] + +num2[i])
    }
    return +arr.join('')
}

console.log(add(16, 18)); //214
console.log(add(2, 11)); //