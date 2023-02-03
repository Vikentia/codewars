function esrever(str) {
    if (!str) return ''
    return str.slice(0, str.length - 1).split('').reverse().join('') + str[str.length - 1]
}

console.log(esrever('an Easy one?') === 'eno ysaE na?');