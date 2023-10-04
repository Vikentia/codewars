function uniqueSum(lst) {
    if (!lst.length) return null
    return [...new Set(lst)].reduce((acc, item) => acc + item, 0) || 0
}

console.log(uniqueSum([-1, -1, 5, 2, -7]));//-1