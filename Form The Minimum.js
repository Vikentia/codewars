function minValue(values) {
    return +[...new Set(values)].sort((a, b) => a - b).join('')
}

console.log(minValue([1, 3, 1]));//13