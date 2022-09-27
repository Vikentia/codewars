function formatDuration(seconds) {
    if(seconds===0) return 'now'
    let year = 0
    let day = 0
    let hour = 0
    let minute = 0
    let second = 0
    if (seconds >= 31536000) {
        year = Math.floor(seconds / 31536000)
        seconds = seconds - year * 31536000
    }
    if (seconds >= 86400) {
        day = Math.floor(seconds / 86400)
        seconds = seconds - day * 86400
    }
    if (seconds >= 3600) {
        hour = Math.floor(seconds / 3600)
        seconds = seconds - hour * 3600
    }
    if (seconds >= 60) {
        minute = Math.floor(seconds / 60)
        seconds = seconds - minute * 60
    }
    if (seconds > 0 && seconds <= 59) {
        second = seconds
    }
    let finalArray = [year, day, hour, minute, second]
    finalArray = finalArray.map((item, ind) => {
        switch (ind) {
            case 0:
                if (item === 1) return '1 year'
                if (item > 1) return `${item} years`
            case 1:
                if (item === 1) return '1 day'
                if (item > 1) return `${item} days`
            case 2:
                if (item === 1) return '1 hour'
                if (item > 1) return `${item} hours`
            case 3:
                if (item === 1) return '1 minute'
                if (item > 1) return `${item} minutes`
            case 4:
                if (item === 1) return '1 second'
                if (item > 1) return `${item} seconds`
        }
    }).filter(item => item)
    if (finalArray.length === 1) return finalArray.join('')
    finalArray = finalArray.join(', ')
    let lastSymb = finalArray.lastIndexOf(',')

    return finalArray.slice(0, lastSymb) + ' and ' + finalArray.slice(lastSymb + 2)
}

console.log(formatDuration(0));//"1 second"
console.log(formatDuration(1));//"1 second"
console.log(formatDuration(62));//"1 minute and 2 seconds"
console.log(formatDuration(3662));//"1 hour, 1 minute and 2 seconds"