const mineLocation = (arr) => {
    let res = []
    arr.forEach((item, ind) => {
        if (item.includes(1)) {
            res.push(ind)
            item.forEach((el, i) => el && res.push(i))
        }
    });
    return res
}

console.log(mineLocation([[1, 0, 0], [0, 0, 0], [0, 0, 0]]));
console.log(mineLocation([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
console.log(mineLocation([[0, 0, 0], [0, 0, 0], [0, 1, 0]]));