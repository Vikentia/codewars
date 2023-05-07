function firstNonRepeatingLetter(s) {
    return s.split('').filter(e => s.toLowerCase().indexOf(e.toLowerCase()) === s.toLowerCase().lastIndexOf(e.toLowerCase()))[0] || ''
}

console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('sTreSS'));
console.log(firstNonRepeatingLetter('moonmen'));