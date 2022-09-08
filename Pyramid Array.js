function pyramid(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push([...'1'.repeat(i).split('').map(Number)])
    }
    return arr
}

console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(5));