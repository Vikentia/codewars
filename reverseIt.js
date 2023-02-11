function reverseIt(data) {
    return typeof data === 'string'
        ? data.split('').reverse().join('')
        : typeof data === 'number'
            ? +(('' + data).split('').reverse().join(''))
            : data
}

console.log(reverseIt('Hello'));