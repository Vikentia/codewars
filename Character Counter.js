function validateWord(s) {
    return s.length % [...new Set(s.toLowerCase().split(''))].length === 0
}

console.log(validateWord("abc:abc"));//false