function remember(str) {
    return [...new Set(str.split('').filter((el, i, arr) => i !== arr.indexOf(el)))]
}

console.log(remember('apple'));
console.log(remember("apPle"));
console.log(remember("pippi"));
console.log(remember('Pippi'));