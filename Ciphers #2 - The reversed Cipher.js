function encode(plaintext) {
    return plaintext.split(' ').map(item => {
        item = item.split('').reverse().join('')
        return item && item.slice(1) + item[0]
    }
    ).join(' ')
}

console.log(encode("Hello World!"));//"lleHo dlroW!"