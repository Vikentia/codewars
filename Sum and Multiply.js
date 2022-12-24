const sumAndMultiply = (sum, multiply) => {
    if (multiply === 0) return [0, sum - 0]
    let res = null;
    for (let i = 1; i <= sum / 2; i++) {
        if (multiply === i * (sum - i)) {
            res = i
        }
    }
    return res ? [res, sum - res] : res
}

console.log(sumAndMultiply(200, 8452)); //null
console.log(sumAndMultiply(15, 56));//[7,8]