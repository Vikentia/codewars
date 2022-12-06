function maxTriSum(numbers) {
    return [...new Set(numbers)].sort((a, b) => b - a).reduce((acc, item, ind) => ind < 3 ? acc + item : acc, 0)
}

console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));