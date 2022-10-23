function deleteNth(arr, n) {
    let array = []
    arr.forEach(item => {
        array.filter(el => el === item).length < n && array.push(item)
    })
    return array
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));