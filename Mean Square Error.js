var solution = function (firstArray, secondArray) {
    return firstArray.map((e, i) => (e - secondArray[i]) ** 2).reduce((acc, item) => acc + item, 0) / firstArray.length
}

console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]));//16.5