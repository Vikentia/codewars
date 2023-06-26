function strong(n) {
    return n.toString().split('').map(el => factorial(+el)).reduce((acc, item) => acc + item, 0) === n ? "STRONG!!!!" : "Not Strong !!"
}

function factorial(num) {
    return num > 1 ? num * factorial(num - 1) : 1
}
