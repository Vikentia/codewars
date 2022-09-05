function encode(string) {
    return string.split('').map(item => {
        let l = ['_', 'a', 'e', 'i', 'o', 'u']
        return l.includes(item) ? l.indexOf(item) : item
    }).join('')
}

function decode(string) {
    let obj = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' }
    return string.split('').map(item => obj.hasOwnProperty(item) ? obj[item] : item).join('')
}

console.log(encode('hello'));
console.log(decode('h2ll4'));