function isNice(arr) {
    return arr.length > 1 && arr.every(el => arr.includes(el - 1) || arr.includes(el + 1))
}

console.log(isNice([2, 10, 9, 3]));
console.log(isNice([3, 4, 5, 7]));


console.log(isNice([0, 2, 19, 4, 4]));
console.log(isNice([3, 2, 1, 0]));
console.log(isNice([3, 2, 10, 4, 1, 6]));
console.log(isNice([1, 1, 8, 3, 1, 1]));
console.log(isNice([0, 1, 2, 3]));
console.log(isNice([1, 2, 3, 4]));
console.log(isNice([0, -1, 1]));
console.log(isNice([0, 2, 3]));
console.log(isNice([0]));
console.log(isNice([]));

