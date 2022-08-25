function findMissingLetter(array) {
    let arr = []
    let start = array[0].codePointAt(0)
    let end = array[array.length - 1].codePointAt(0)
    for (let i = start; i <= end; i++) {
        arr.push(String.fromCodePoint(i))
    }
    return arr.filter(item => !array.includes(item)).join('');
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));