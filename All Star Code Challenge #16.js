function noRepeat(str) {
    return str.split('').filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0]
}

console.log(noRepeat("aabbccdde"));//'e'