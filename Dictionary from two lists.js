function createDict(keys, values) {
    let res = {}
    for (let i = 0; i < keys.length; i++) {
        res[keys[i]] = typeof values[i] !== 'undefined' ? values[i] : null
    }
    return res
}

console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]));//{'a': 1, 'b': 2, 'c': 3}
console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]));//{'a': 1, 'b': 2, 'c': 3, 'd':null}
