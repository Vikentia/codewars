function shorter_reverse_longer(a, b) {
    return a.length >= b.length ? b + a.split('').reverse().join('') + b : a + b.split('').reverse().join('') + a
}

console.log(shorter_reverse_longer("first", "abcde"));//"abcdetsrifabcde"