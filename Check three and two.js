function checkThreeAndTwo(array) {
    let setArr = [...new Set(array)]
    if (setArr.length !== 2) return false
    if (array.filter(e => e === setArr[0]).length === 2 && array.filter(e => e === setArr[1]).length === 3 ||
        array.filter(e => e === setArr[0]).length === 3 && array.filter(e => e === setArr[1]).length === 2) return true
    return false
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
console.log(checkThreeAndTwo(["a", "a", "a", "b", "c"]));