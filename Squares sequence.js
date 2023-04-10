function squares(x, n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        i === 1
            ? arr.push(x)
            : arr.push(arr[arr.length - 1] ** 2)
    }
    return arr;
}

console.log(squares(2, 5));//[2,4,16,256,65536]