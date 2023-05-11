function formatWords(words) {
    if (!words || !words.length) return '';
    let arr = words.filter(e => e)
    if (arr.length === 1) return arr[0];
    let str = arr.join(', ')
    if (!str) return ''
    return str.slice(0, str.lastIndexOf(',')) + ' and' + str.slice(str.lastIndexOf(',') + 1);
}

console.log(formatWords(['one', 'two', 'three', 'four']));
console.log(formatWords(['one', 'two', '']));
console.log(formatWords([])); //""
console.log(formatWords(['', '', 'three']));//'three'
console.log(formatWords([''])); //""
console.log(formatWords([null])); //""