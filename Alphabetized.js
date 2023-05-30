function alphabetized(s) {
    return s.replace(/[\s_!\-,()@*&#%`^+=$0-9]/g, '')
        .split('')
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .join('')
}

console.log(alphabetized('0000BbGghLlMmNnqrTtvw'));//'BbGghLlMmNnqrTtvw'
console.log(alphabetized("The Holy Bible"));
console.log(alphabetized("The Holy Bible") == "BbeehHilloTy");