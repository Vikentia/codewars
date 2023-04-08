function multiplyAll(arr) {
    return (n) => {
        return arr.map(e => e * n)
    }
}

console.log(multiplyAll([1, 2, 3])(2));