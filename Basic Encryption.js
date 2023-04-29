function encrypt(text, rule) {
    return text.split('')
        .map(e => String.fromCodePoint((e.charCodeAt(0) + rule) > 255 ? (e.charCodeAt(0) + rule) % 256 : (e.charCodeAt(0) + rule)))
        .join('');
};

console.log(encrypt("a", 1));//"b"
console.log(encrypt("", 1));//""
console.log(encrypt("please encrypt me", 2));//"rngcug\"gpet{rv\"og"