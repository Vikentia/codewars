function largest(n, array) {
    const arr = [...array]
    arr.sort((a, b) => b - a)
    arr.length = n
    return arr.sort((a, b) => a - b);
}

console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]));//[-1, 0]