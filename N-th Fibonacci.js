function nthFibo(n) {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n - 1]
}

console.log(nthFibo(1));
console.log(nthFibo(4));