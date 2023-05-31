function isAlt(word) {
    const arr = word.split('');
    let res1 = arr.every((el, i) => i % 2 ? (/[aeiou]/i).test(el) : (/[^aeiou]/i).test(el))
    let res2 = arr.every((el, i) => i % 2 ? (/[^aeiou]/i).test(el) : (/[aeiou]/i).test(el))
    return res1 || res2
}

console.log(isAlt("amazon"));
console.log(isAlt("banana"));
console.log(isAlt("apple"));
