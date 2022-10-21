function partsSums(ls) {
    let sum = ls.reduce((sum, item) => sum + item, 0)
    let result = [sum]
    for (let i = 1; i <= ls.length; i++) {
        sum -= ls[i - 1]
        result.push(sum)
    }
    return result
}

console.log(partsSums([]))
console.log(partsSums([0, 1, 3, 6, 10]))
console.log(partsSums([1, 2, 3, 4, 5, 6]))
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]))