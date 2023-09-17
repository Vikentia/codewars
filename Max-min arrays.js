function solve(arr) {
    const res = []
    const arr2 = [...arr]
    for (let i = 0; i < arr.length / 2; i++) {
        res.push(Math.max(...arr2))
        arr2.splice(arr2.indexOf(Math.max(...arr2)), 1)
        arr2.length && res.push(Math.min(...arr2))
        arr2.splice(arr2.indexOf(Math.min(...arr2)), 1)
    }
    return res
};

console.log(solve([78, 79, 52, 87, 16, 74, 31, 63, 80]));//[87,16,80,31,79,52,78,63,74]