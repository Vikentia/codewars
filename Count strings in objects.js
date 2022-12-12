function strCount(obj) {
    let count = 0
    for (const value in obj) {
        if (typeof obj[value] === 'string') count++
        if (typeof obj[value] === 'object') {
            count += strCount(obj[value])
        }
    }
    return count
}

let obj = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {}
}
console.log(strCount(obj));