function permuteAPalindrome(input) {
    let arr = []
    input = input.split('').sort()
    while (input.length) {
        if (input[0] === input[1]) {
            input = input.slice(2)
        } else {
            arr.push(input.shift(0))
        }
    }
    return arr.length < 2
}

console.log(permuteAPalindrome("racecars"));
console.log(permuteAPalindrome("baa")); 