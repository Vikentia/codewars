// Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
    return str.split('').filter(char => /[a-zA-Z]/.test(char)).reverse().join('')
}

console.log(reverseLetter("ultr53o?n"));//"nortlu"