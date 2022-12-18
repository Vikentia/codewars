function diff(a, b) {
    a = [...new Set(a)]
    b = [...new Set(b)]
    const res = []
    a.forEach(item => b.includes(item) || res.push(item))
    b.forEach(item => a.includes(item) || res.push(item))
    return res.sort()
}

console.log(diff(["a", "b", "z", "d", "e", "d"], ["a", "b", "j", "j"]));//["d","e","j","z"]