function group(arr) {
    return [...new Set(arr)].map(e => [...arr.filter(el => el === e)])
}

console.log(group([3, 2, 6, 2]));//[[3], [2, 2], [6]]