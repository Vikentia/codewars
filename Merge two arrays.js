function mergeArrays(a, b) {
    let res = []
    for (let i = 0; i < (a.length > b.length ? a.length : b.length); i++) {
        a[i] && res.push(a[i])
        b[i] && res.push(b[i])
    }
    return res
}

console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]));
//['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']