function nbDig(n, d) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(i * i)
    }
    let re = new RegExp(`${d}`, 'g')
    return arr.join('').match(re).length
}

console.log(nbDig(5750, 0));//4700
console.log(nbDig(11011, 2));//9481
console.log(nbDig(12224, 8));//7733