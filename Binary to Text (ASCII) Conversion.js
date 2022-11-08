function binaryToString(binary) {
    if (!binary) return ''
    return binary
        .split('')
        .map((item, ind) => (ind + 1) % 8 === 0 ? item + ' ' : item)
        .join('')
        .trim()
        .split(' ')
        .map(el => String.fromCharCode(parseInt(el, 2)))
        .join('')
}

console.log(binaryToString('01100001'));
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'));
console.log(binaryToString('00110001001100000011000100110001'));
console.log(binaryToString('001111000011101000101001'));
console.log(binaryToString(' '));