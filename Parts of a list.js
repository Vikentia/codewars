function partlist(arr) {
    const res = []
    arr.forEach((el, i) => {
        res.push([arr.slice(0, i + 1).join(' '), arr.slice(i + 1).join(' ')])
    })
    res.length = arr.length - 1;
    return res
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));