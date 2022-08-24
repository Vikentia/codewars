function narcissistic(value) {
    let n = ('' + value).length;
    let d = ('' + value).split('')
        .reduce((acc, item) => acc + Math.pow(item, n), 0)
    return value === d
}

console.log(narcissistic(371));
console.log(narcissistic(372));