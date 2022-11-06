function WhatIsTheTime(timeInMirror) {
    let [hours, minutes] = timeInMirror.split(':').map(Number)
    let timeInMinutes = hours * 60 + minutes
    let c = 24 * 60 - timeInMinutes
    let newHours = Math.floor(c / 60)
    let newMin = c - newHours * 60
    if (newHours > 12) newHours = newHours - 12
    if (newHours < 10) newHours = '0' + newHours
    if (newMin < 10) newMin = '0' + newMin
    return newHours + ':' + newMin
}

console.log(WhatIsTheTime("06:35"));//"05:25"
console.log(WhatIsTheTime("11:59"));//"12:01"
console.log(WhatIsTheTime("12:02"));//"11:58"
console.log(WhatIsTheTime("10:36"));//"01:24"