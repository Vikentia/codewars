const capitals = (word) => {
    const arr = []
    word.split('').forEach((item, ind) => item === item.toUpperCase() && arr.push(ind))
    return arr
};

console.log(capitals('CodEWaRs'));