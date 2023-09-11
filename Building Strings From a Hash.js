function solution(pairs) {
    return Object.entries(pairs).map(el => el[0] + ' = ' + el[1]).join(',')
}

console.log(solution({ a: 1, b: '2' }));//"a = 1,b = 2"