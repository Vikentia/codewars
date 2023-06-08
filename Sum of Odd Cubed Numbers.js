function cubeOdd(arr) {
    if (arr.some(el => typeof el !== 'number')) return undefined
    return arr.map(el => el ** 3).filter(el => el % 2).reduce((acc, item) => acc + item, 0)
}

console.log(cubeOdd([1, 2, 3, 4]));//28