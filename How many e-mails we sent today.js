function getPercentage(sent, limit = 1000) {
    if (!sent) return "No e-mails sent"
    let res = Math.floor(sent / limit * 100)
    return res >= 100 ? "Daily limit is reached" : res + '%'
}

console.log(getPercentage(101, 1000));//"10%"
console.log(getPercentage(256, 500));//"51%"
console.log(getPercentage(259));//"25%"
console.log(getPercentage(0));//