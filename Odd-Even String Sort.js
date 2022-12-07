function sortMyString(s) {
    let odd = ''
    let even = ''
    s.split('').forEach((item, ind) => {
        ind % 2 === 0 ? odd += item : even += item
    })
    return odd + ' ' + even;
}

console.log(sortMyString("YCOLUE'VREER"));