function convert(number) {
    let arr = []
    number = number.split('')
    for (let i = 0; i < number.length; i = i + 2) {
        arr.push(+(number[i] + number[i + 1]))
    }
    return arr.map(el => String.fromCharCode(el)).join('')
}

console.log(convert("73327673756932858080698267658369"));