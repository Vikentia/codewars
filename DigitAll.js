function digitAll(x) {
    return typeof x === 'string' ? x.replace(/[^0-9]/gi, '') : 'Invalid input !'
}

console.log(digitAll("wai8, where are you goin'?"));