function wordsToMarks(string) {
    return string.split('').map(item => item.codePointAt(0) - 96).reduce((acc, item) => acc + item)
}

console.log(wordsToMarks("friends"));//75
console.log(wordsToMarks("a"));//1