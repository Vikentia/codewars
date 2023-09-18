function moveTen(s) {
    return s
        .split('')
        .map(el => el.codePointAt(0) + 10 >= 123 ? String.fromCharCode(el.codePointAt(0) - 16) : String.fromCharCode(el.codePointAt(0) + 10))
        .join('')
}

console.log(moveTen("codewars"));//"mynogkbc"