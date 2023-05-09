function longest(str) {
    const arr = str.split('')
    const res = []
    let middle = ''
    arr.forEach((e, i) => {
        if (e.charCodeAt(0) >= 97 && e.charCodeAt(0) <= 122) {
            if (e.charCodeAt(0) >= (middle[middle.length - 1] || 'a').charCodeAt(0) || middle === '') {
                middle += e
            } else {
                res.push(middle)
                middle = e
            }
        }
        if (i === arr.length - 1) res.push(middle)
    })
    const max = [...res].sort((a, b) => b.length - a.length)[0].length
    return res.filter(e => e.length === max)[0]
}

console.log(longest("asdfaaaabbbbcttavvfffffdf"));//"aaaabbbbctt"
console.log(longest("nab"));//'ab'