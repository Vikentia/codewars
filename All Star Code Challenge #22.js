function toTime(seconds) {
    let minutes = seconds / 60
    let hours = minutes > 59 ? Math.floor(minutes / 60) : 0
    if (hours) {
        minutes = Math.abs(minutes - 60 * hours)
    }
    return `${parseInt(hours)} hour(s) and ${parseInt(minutes)} minute(s)`
}

console.log(toTime(3601));//'1 hour(s) and 0 minute(s)'
console.log(toTime(323500));//'89 hour(s) and 51 minute(s)'