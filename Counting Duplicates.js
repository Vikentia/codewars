function duplicateCount(text) {
    let count = 0
    let array = text.toLowerCase().split('')
    let array2 = [...new Set(array)]
    array2.forEach(item => {
        if (array.filter(e => e === item).length > 1) count++
    })
    return count
}

console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabBcde")); //2