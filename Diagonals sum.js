function sum(matrix) {
    let sum = 0;
    matrix.forEach((el, ind) => {
        sum += el[ind] + el[el.length - ind - 1]
    })
    return sum
}

console.log(sum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));//30