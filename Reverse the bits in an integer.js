function reverseBits(n) {
    let reverseBinary = n.toString(2).split('').reverse().join('')
    return parseInt(reverseBinary, 2)
}

console.log(reverseBits(417));//267
console.log(reverseBits(1024));//1
console.log(reverseBits(2017));//1087