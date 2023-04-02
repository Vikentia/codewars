function solve(arr) {
    const res = []
    arr.forEach(w => {
        let count = 0;
        w.split('').forEach((l, i) => {
            if (i + 1 === l.toLowerCase().charCodeAt(0) - 96) count++
        })
        res.push(count)
    })
    return res
};

console.log(solve(["abide", "ABc", "xyz"]));//[4,3,0]