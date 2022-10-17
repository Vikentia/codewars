function inAscOrder(arr) {
    const copyArr = [...arr].sort((a, b) => a - b)
    return copyArr.every((item, i) => item === arr[i])
}
console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]));