function findNumber(array) {
    let sum = array.reduce((acc, item) => acc + item, 0)
    let sum2 = (array.length + 1) * (array.length + 2) / 2
    return sum2 - sum
}

console.log(findNumber([1, 3, 4, 5, 6, 7, 8]));
console.log(findNumber([7, 8, 1, 2, 4, 5, 6]));
console.log(findNumber([1, 2, 3, 5]));
console.log(findNumber([1, 3]));
console.log(findNumber([2, 3, 4]));
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]));
console.log(findNumber([1, 2, 3]));