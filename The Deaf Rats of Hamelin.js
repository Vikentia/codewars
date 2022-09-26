var countDeafRats = function (town) {
    let rats = town.replace(/ /g, '').replace(/[P]/, 'PP').split('')
    let arr = []
    let deafRats = 0
    for (let i = 0; i < rats.length; i = i + 2) {
        arr.push(rats[i] + rats[i + 1])
    }
    let indP = arr.indexOf('PP')
    arr.forEach((item, i) => {
        if (i < indP && item === "O~") deafRats++
        if (i > indP && item === "~O") deafRats++
    })
    return deafRats
}


console.log(countDeafRats("~O~O~O~O P"));
console.log(countDeafRats("P O~ O~ ~O O~"));
console.log(countDeafRats("~O~O~O~OP~O~OO~"));