function getDecimal(n) {
    return Math.abs(n) - Math.floor(Math.abs(n));
}

console.log(getDecimal(-4.5));
console.log(getDecimal(-1.2));