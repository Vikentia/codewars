function doubleCheck(str) {
    return (/(.)\1/gi).test(str)
}

console.log(doubleCheck("a 11 c d"));
console.log(doubleCheck("a b c d e f g h i h k"));