function digitize(n) {
    return n.toString().split('').map(Number)
}

console.log(digitize(8675309));