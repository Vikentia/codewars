function digitalRoot(n) {
    while (n > 9) {
        n = `${n}`.split('').reduce((acc, item) => acc + +item, 0)
    }
    return n
}

console.log(digitalRoot(456));