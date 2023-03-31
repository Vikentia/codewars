function hasUniqueChars(str) {
    return str.split('').sort().join('') === [...new Set(str.split(''))].sort().join('')
}

console.log(hasUniqueChars("  nAa"));