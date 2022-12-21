function similarity(a, b) {
    let arr = a.filter(item => b.includes(item))
    let arr2 = [...new Set(a.concat(b))]
    return arr.length / arr2.length
}

console.log(similarity([1, 2, 4, 6, 7], [2, 3, 4, 7]));//0.5