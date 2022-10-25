function prefill(n, v) {
    if (n === 0 || n === '0') return []
    if (!(+n) || parseInt(n) !== +n || n < 0) throw new TypeError(`${n} is invalid`)
    return new Array(n).fill(v)
}

console.log(prefill(3, 1));
console.log(prefill(2, 'abc'));
console.log(prefill('1', 1));
console.log(prefill(3, prefill(2, '2d')));
console.log(prefill("xyz", 1));
console.log(prefill(3.15, 1));