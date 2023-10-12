function absentVowel(x) {
    if (!x.includes('a')) return 0
    if (!x.includes('e')) return 1
    if (!x.includes('i')) return 2
    if (!x.includes('o')) return 3
    if (!x.includes('u')) return 4
}

console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));//3