function parse(data) {
    let count = 0;
    let arr = []
    data = data.split('').forEach(item => {
        switch (item) {
            case 'i': return ++count
            case 'd': return --count
            case 's': return count = count ** 2
            case 'o': arr.push(count)
        }
    })
    return arr
}

console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));