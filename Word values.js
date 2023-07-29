function wordValue(a) {
    return a.map(el => {
        return el.split('')
            .filter(e => (/[a-z]/i).test(e))
            .map(e => e.codePointAt(0) - 96)
            .reduce((acc, item) => acc + item, 0)

    })
        .map((el, i) => el * (i + 1))
}

console.log(wordValue(["codewars", "abc", "xyz"]));//[88,12,225]
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]));//[12,24,18,24]