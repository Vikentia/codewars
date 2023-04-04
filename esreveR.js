reverse = function (array) {
    const res = []
    for (let i = 0; i < array.length; i++) res.unshift(array[i])
    return res
}

console.log(reverse([714, 860, 434, 360, 869, 608, 560]));