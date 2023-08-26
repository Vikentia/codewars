const translateToNumber = (str) => {
    if (!(/[^a-z]/gi).test(str) && str) {
        return str.toUpperCase().split('').reduce((acc, item) => acc + item.charCodeAt(0), 0)
    }
}

function compare(s1, s2) {
    return translateToNumber(s1) === translateToNumber(s2)
}

console.log(compare("ZzZz", "ffPFF"));//true
console.log(compare("kl", "lz"));//false
console.log(compare(null, ""));//true
console.log(compare("gf", "FG"));//true