function moreZeros(s) {
    const arr = [...new Set(s.split(''))]
        .map(e => e.charCodeAt(0).toString(2))
        .filter(e => e.split('').filter(e => e === '0').length > e.split('').filter(e => e === '1').length)
        .map(e => String.fromCharCode(parseInt(e, 2)))
    return arr
}

console.log(moreZeros('abcde'));//['a','b','d']
console.log(moreZeros('Great job!'));//['a', ' ', 'b', '!']
console.log(moreZeros('abcdeabcde'));//['a','b','d']