function sumConsecutives(s) {
    let arr = []
    s.forEach((item, ind) => {
        if (ind && item === s[ind - 1]) {
            arr[arr.length - 1] = arr[arr.length - 1] + item
        } else { arr.push(item) }
    })
    return arr
}
console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]));
console.log(sumConsecutives([1, 1, 7, 7, 3]));
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]));
console.log(sumConsecutives([3, 3, 3, 3, 1]));