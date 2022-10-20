const sequenceSum = (begin, end, step) => {
    count = 0
    if (end < begin) return count
    for (let i = begin; i <= end; i = i + step) {
        count += i
    }
    return count
};

console.log(sequenceSum(2, 2, 2));//2
console.log(sequenceSum(2, 6, 2));//12
console.log(sequenceSum(1, 5, 1));//15
console.log(sequenceSum(1, 5, 3));//5