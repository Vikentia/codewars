function capitalize(s) {
    let a = ''
    let b = ''
    s.split('').forEach((item, ind) => {
        if (ind % 2) {
            a += item.toLowerCase()
            b += item.toUpperCase()
        } else {
            a += item.toUpperCase()
            b += item.toLowerCase()
        }
    })
    return [a, b];
};

console.log(capitalize("abcdef"));//['AbCdEf', 'aBcDeF']