function expandedForm(num) {
    let str = []
    while (num) {
        let digit = ('' + num).length
        let integer = ('' + num)[0] + '0'.repeat(digit - 1)
        str.push(integer)
        num = num - integer
    }
    return str.join(' + ')
}
console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(73304));