function checkExam(array1, array2) {
    let count = 0
    array2.forEach((item, i) => {
        item === array1[i] ? count += 4 : item === '' ? count += 0 : count -= 1
    })
    return count < 0 ? 0 : count
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));//6
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));//0
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));//16
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));//7