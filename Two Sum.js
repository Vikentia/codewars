function twoSum(numbers, target) {
    let arr = [];
    numbers.forEach((item, ind) => {
        let i = numbers.indexOf(target - item)
        if (i > -1 && ind !== i) {
            arr.push(ind)
            arr.push(i)
            numbers.splice(i, 1, '')
        }
    })
    arr.length = 2
    return arr
}
console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([2, 3, 1], 4));