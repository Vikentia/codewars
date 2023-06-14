function solution(value) {
    return 'Value is ' + '0'.repeat(5 - value.toString().length) + value
}

console.log(solution(1204));//"Value is 01204"