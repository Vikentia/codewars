function disariumNumber(n) {
    return n.toString().split('').map((el, i) => el ** (i + 1)).reduce((acc, item) => acc + item, 0) === n ? "Disarium !!" : "Not !!"
}

console.log(disariumNumber(89));//"Disarium !!"
console.log(disariumNumber(564));//"Not !!"