function groupByCommas(n) {
    const arr = []
    if (n > 999) {
        let num = ('' + n).split('')
        while (num.length > 2) {
            arr.unshift(num.slice(num.length - 3).join(''))
            num = num.slice(0, num.length - 3)
        }
        if (num.length) arr.unshift(num.join(''))
    } else {
        arr.push(n.toString())
    }
    return arr.join(',')
}

console.log(groupByCommas(100));
console.log(groupByCommas(10000));
console.log(groupByCommas(100000));
console.log(groupByCommas(35235235));
