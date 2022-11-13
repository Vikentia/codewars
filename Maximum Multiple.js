function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor
}

console.log(maxMultiple(37, 200));//185