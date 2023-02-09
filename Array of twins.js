function twins(myArray) {
    let sum = myArray.reduce((acc, item) => acc + item, 0)
    let uniSum = [...new Set(myArray)].reduce((acc, item) => acc + item, 0)
    return sum === uniSum * 2
}

console.log(twins([1, 2, 3, 1, 2, 3]));
console.log(twins([2, 16, 2, 17, 2, 16]));