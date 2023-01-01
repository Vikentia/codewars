function twistedSum(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        if (i < 10) {
            sum += i
        } else {
            let digit = i.toString().split('').reduce((acc, item) => acc + +item, 0)
            sum += digit
        }
    }
    return sum;
}

console.log(twistedSum(12));//51