function solve(s) {
    let arr = s.split(/[aeiou]+/).map(item => item.split('').map(el => el.charCodeAt(0) - 96).reduce((acc, i) => acc + +i, 0))
    return Math.max(...arr)
};

console.log(solve("zodiac"));
console.log(solve("chruschtschov"));