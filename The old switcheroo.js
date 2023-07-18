function vowel2index(str) {
    return str.split('').map((el, i) => /[aeiou]/gi.test(el) ? i + 1 : el).join('')
}

console.log(vowel2index('this is my string'));//'th3s 6s my str15ng'