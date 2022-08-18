function findOutlier(integers) {
    let arr = integers.filter(item => item % 2 === 0)
    let arr2 = integers.filter(item => item % 2 !== 0)
    return arr.length > arr2.length ? arr2[0] : arr[0]
}

console.log(findOutlier([0, 1, 2])); //1
console.log(findOutlier([1, 2, 3])); //2