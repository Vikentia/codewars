function getSum(a, b) {
    let arr = []
    if (a>b) [a,b]=[b,a]
    for (let i = a; i <= b; i++) arr.push(i)
    return arr.reduce((acc, item) => acc + item, 0)
}

console.log(getSum(0, -1));