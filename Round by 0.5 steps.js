function solution(n) {
    const rest = n % 1;
    return rest <= 0.25 ? Math.floor(n) : rest >= 0.25 && rest < 0.75 ? Math.floor(n) + 0.5 : Math.round(n)
}

console.log(solution(4.2));//4
console.log(solution(4.4));//4.5
console.log(solution(4.6));//4.5
console.log(solution(4.8));//5