function dontGiveMeFive(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        let a = String(i).split('')
        a.includes('5') || arr.push(i)
    }
    return arr.length
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));