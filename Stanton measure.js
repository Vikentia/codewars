const stantonMeasure = (arr) => {
    return arr.filter(e => e === arr.filter(el => el == 1).length).length
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));//3