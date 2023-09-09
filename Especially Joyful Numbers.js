function numberJoy(n) {
    const sum = n.toString().split('').reduce((acc, item) => acc + +item, 0)
    const sumReverse = +sum.toString().split('').reverse().join('')
    return n % sum === 0 && sum * sumReverse === n
}

console.log(numberJoy(1729));//true
console.log(numberJoy(1998));//false