function toLeetSpeak(str) {
    return str.split('').map(el => alf[el] ? alf[el] : el).join('')
}

const alf = {
    A: '@', B: '8', C: '(', D: 'D', E: '3', F: 'F', G: '6', H: '#', I: '!', J: 'J', K: 'K', L: '1', M: 'M', N: 'N',
    O: '0', P: 'P', Q: 'Q', R: 'R', S: '$', T: '7', U: 'U', V: 'V', W: 'W', X: 'X', Y: 'Y', Z: '2'
}

console.log(toLeetSpeak("CODEWARS"));//"(0D3W@R$"
console.log(toLeetSpeak("HELLO WORLD"));//"#3110 W0R1D"