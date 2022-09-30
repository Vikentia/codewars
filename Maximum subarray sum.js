const maxSequence = (arr) => {
    if (arr.every(e => e > 0)) return arr.reduce((acc, item) => acc + item, 0)
    let maxSum = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            maxSum = Math.max(maxSum, sum)
        }
    }
    return maxSum
}

console.log(maxSequence([])); //0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));//6