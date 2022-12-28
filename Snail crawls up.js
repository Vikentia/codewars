function snail(column, day, night) {
    let days = 0
    while (column > 0) {
        column -= day
        days++
        if (column <= 0) return days
        column += night
    }
    return days
}



console.log(snail(10, 3, 1));//5
console.log(snail(10, 3, 2));//8