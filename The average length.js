function averageLength(arr) {
    let average = Math.round(arr.join('').length / arr.length)
    return arr.map(item => item[0].repeat(average))
}

console.log(averageLength(['aa', 'bbb', 'cccc']));
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']));