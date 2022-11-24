function averageString(str) {
    if (!str) return 'n/a'
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let sum = str.split(' ').map(item => {
        if (numbers.includes(item)) {
            return numbers.indexOf(item)
        } else {
            return 'n/a'
        }
    }).reduce((acc, item) => acc + item, 0)
    return numbers[Math.floor(sum / str.split(' ').length)] || 'n/a'
}

console.log(averageString("zero nine five two"));
console.log(averageString("four six two three"));
console.log(averageString("one two three four five"));