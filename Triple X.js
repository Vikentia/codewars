// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".


function tripleX(str) {
    let i = str.indexOf('x')
    return str[i + 1] === 'x' && str[i + 2] === 'x'

}

console.log(tripleX("xoxotrololololololoxxx"));
console.log(tripleX("soft kitty, warm kitty, xxxxx"));
console.log(tripleX("softx kitty, warm kitty, xxxxx"));