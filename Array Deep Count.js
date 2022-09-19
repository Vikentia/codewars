const deepCount = (arr) => {
    let count = 0
    function isArray(array) {
        array.forEach(item => {
            if (Array.isArray(item)) {
                count++
                isArray(item)
            } else {
                count++
            }
        })
    }
    isArray(arr)
    return count
}
console.log(deepCount([1, 2, 3]));
console.log(deepCount([1, 2, [3, 4, [5]]]));