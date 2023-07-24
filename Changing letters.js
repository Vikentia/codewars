function swap(string) {
    return string.split('').map(el => (/[aeiou]/g).test(el) ? el.toUpperCase() : el).join('')
}

console.log(swap("HelloWorld!"));//"HEllOWOrld!"