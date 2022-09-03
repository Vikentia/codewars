function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null) return 0
    let arrNum = arrayOfArrays.map(item => item !== null ? item.length : 0).sort((a, b) => a - b)
    if (arrNum[0] === 0) return 0
    let arr = []
    for (let i = arrNum[0]; i < arrNum[arrNum.length - 1]; i++) { arr.push(i) }
    return arr.filter(item => !arrNum.includes(item))[0] || 0
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
console.log(getLengthOfMissingArray([[null], [null, null, null]]));
console.log(getLengthOfMissingArray([[], [0], [3, 3, 3]]));
console.log(getLengthOfMissingArray([[], [3], [4, 3, 3], [3, 3, 0, 2], [3, 0, 0, 3, 2]]));