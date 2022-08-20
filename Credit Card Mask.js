function maskify(cc) {
    return cc.split('').fill('#', 0, -4).join('')
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));