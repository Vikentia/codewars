function solution(digits) {
    let max = 0
    for (let i = 0; i < digits.length - 4; i++) {
        max = max > +digits.substr(i, 5) ? max : +digits.substr(i, 5)
    }
    return max
}

console.log(solution('1234567898765'));