function arrAdder(arr) {
    let array = []
    for (let i = 0; i < arr[0].length; i++) {
        let word = arr.map(item => item[i])
        array.push(word)
    }
    return array.map(e => e.join('')).join(' ')
}

console.log(arrAdder([
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]));