function upArray(arr) {
    if (arr.some(item => item < 0 || item > 9 || (arr.length === 1 && arr[0] === 0))) return null
    if (arr.every(item => typeof item !== 'number')) return null
    let num = BigInt(arr.join('')) + BigInt(1)
    return num.toString().split('').map(Number)
}
console.log(upArray([9, 9, 9]));
console.log(upArray([2, 3, 9]));
console.log(upArray([4, 7, 0, 9, 4, 9, 6, 3, 0, 2, 6, 8, 2, 0]));
console.log(upArray([0]));
console.log(upArray([7, 9, 3, 6, 6, 8, 4, 8, 8, 2, 2, 0, 3, 8, 0, 7, 0, 4, 7, 7, 3, 8, 8, 8, 4, 9, 2, 2, 5, 9, 4, 1, 8, 0, 4, 3, 4, 0, 4, 8, 1]));