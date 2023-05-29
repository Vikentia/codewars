function getDay(day, isLeap) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = isLeap ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let num = 0
    for (let i = 0; i < 12; i++) {
        if (day > days[i]) {
            num++
            day -= days[i]
        } else {
            return `${months[num]}, ${day ? day : 1}`
        }
    }
}

console.log(getDay(41, false));//"February, 10"
console.log(getDay(60, false));//"March, 1"
console.log(getDay(60, true));//"February, 29"
console.log(getDay(31, true));//"January, 31"