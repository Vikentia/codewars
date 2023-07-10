function maxProduct(a) {
    let maxNum = Math.max(...a)
    a.splice(a.indexOf(maxNum), 1)
    let max2 = Math.max(...a)
    return maxNum * max2
}

console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]));//218842