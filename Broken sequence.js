function findMissingNumber(sequence) {
    const sortedArr = sequence.split(' ').map(Number).sort((a, b) => a - b)
    if (sortedArr.every((item, i) => item === i + 1) || !sequence) return 0
    if (sortedArr.filter(el => isNaN(el)).length) return 1
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== i + 1) return i + 1
    }
}

console.log(findMissingNumber("1 2 4 3"));//0
console.log(findMissingNumber("1 2 3 5"));//4
console.log(findMissingNumber("2 1 4 3 a"));//1
console.log(findMissingNumber(''));//0