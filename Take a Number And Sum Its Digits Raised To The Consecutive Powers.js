function sumDigPow(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr.filter(item => {
        return ('' + item).split('').reduce((acc, el, ind) => acc + (+el) ** (ind + 1), 0) === item
    })
}
console.log(sumDigPow(1, 135));  