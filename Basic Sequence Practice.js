function sumOfN(n) {
    const arr = [0]
    for (let i = 1; i <= Math.abs(n); i++) {
        arr.push(arr[arr.length - 1] + i)
    }
    return n > 0 ? arr : arr.map((e, i) => i && -e)
}

console.log(sumOfN(3));
console.log(sumOfN(-4));