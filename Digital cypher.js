function encode(str, n) {
    const arr = str.split('').map(e => e.codePointAt(0) - 96)
    let code = ''
    while (code.length < arr.length) {
        code += n
    }
    code = code.split('')
    return arr.map((el, i) => el + +code[i])
}


console.log(encode("scout", 1939));//[ 20, 12, 18, 30, 21]
console.log(encode("masterpiece", 1939));//[ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]