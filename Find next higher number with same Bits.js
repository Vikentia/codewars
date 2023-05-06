function nextHigher(n) {
    let res = n + 1
    const numLength = n.toString(2).split('').filter(e => +e).length
    while (numLength !== res.toString(2).split('').filter(e => +e).length) {
        res++
    }
    return res
}

console.log(nextHigher(128));//256
console.log(nextHigher(129));//130
