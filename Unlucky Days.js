function unluckyDays(year) {
    let days = 0
    for (let i = 0; i < 12; i++) {
        let date = new Date(year, i, 13)
        if (date.getDay() === 5) days++
    }
    return days
}

console.log(unluckyDays(1586));//1
console.log(unluckyDays(1001));//3