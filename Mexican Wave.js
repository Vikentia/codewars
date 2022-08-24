function wave(str) {
    let arr = new Array(str.length).fill(str)
    return arr.map((item, index) => {
        let word = item.split('')
        word[index] = word[index].toUpperCase()
        return word.join('')
    }).filter(el => el !== el.toLowerCase())
}

console.log(wave("hello"));
console.log(wave("two hello"));