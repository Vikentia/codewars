function magicSum(numbers) {
    return numbers.filter(e => e % 2 && (e + '').includes('3')).reduce((acc, item) => acc + item, 0)
}

console.log(magicSum([3, 13]));//16
console.log(magicSum([30, 34, 330]));//0
console.log(magicSum([3, 12, 5, 8, 30, 13]));//16