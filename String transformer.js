function stringTransformer(str) {
    return str
        .split(' ')
        .reverse()
        .map(item => item.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join(''))
        .join(' ')
}

console.log(stringTransformer('Example string'));
// console.log(stringTransformer());