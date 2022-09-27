function humanReadable(sec) {
    let hours = Math.floor(sec / 3600)
    let minutes = Math.floor((sec - hours * 3600) / 60)
    let seconds = sec - hours * 3600 - minutes * 60
    return [hours, minutes, seconds].map(item => item < 10 ? '0' + item : item).join(":")
}

console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(3599));
console.log(humanReadable(3600));