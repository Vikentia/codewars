function tribonacci(signature, n) {
    if (!n) return []
    if (n === 1) return [1]
    for (let i = 2; i < n - 1; i++) {
        signature.push(signature[i - 2] + signature[i - 1] + signature[i])
    }
    return signature.slice(0, n)
}

console.log(tribonacci([1, 1, 1], 10));//[1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([1, 1, 1], 1)); //[1]
console.log(tribonacci([300, 200, 100], 0)); //[]