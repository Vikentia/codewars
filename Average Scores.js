function average(scores) {
    return Math.round(scores.reduce((acc, item) => acc + item, 0) / scores.length)
}

console.log(average([90, 98, 89, 100, 100, 86, 94]));//94