function cleanString(s) {
    let arr = []
    s.split('').forEach(item => {
        item === '#' ? arr.pop() : arr.push(item)
    })
    return arr.join('')
}

console.log(cleanString('abc#d##c'));
console.log(cleanString('abc####d##c#'));