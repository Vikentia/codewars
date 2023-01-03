var isSquare = function (arr) {
    return arr.length === 0 ? undefined : arr.every(el => Math.sqrt(el) % 1 === 0)
}

console.log(isSquare([1, 2, 4, 15]));