function solve(str) {
    let reverse = str.split('').filter(el => el !== ' ').reverse()
    return str.split('').map(item => item === ' ' ? ' ' : reverse.shift()).join('')
}

console.log(solve("i love codewars"));//"s rawe docevoli"
console.log(solve("your code rocks"));//"skco redo cruoy"