function whatCentury(year) {
    let century = Math.ceil(year / 100)
    let end = ''
    let d = century % 10
    if (d === 0 | century === 13 | d === 4 | century === 11 | d === 5 | d === 6 | d === 7 | d === 8 | d === 9) end = 'th'
    if (d === 1 && century !== 11) end = 'st'
    if (d === 2) end = 'nd'
    if (d === 3 && century !== 13) end = 'rd'
    return century + end
}

console.log(whatCentury('1999'));
console.log(whatCentury('2011'));
console.log(whatCentury('2154'));
console.log(whatCentury('2259'));
console.log(whatCentury('3000'));
console.log(whatCentury('1234'));