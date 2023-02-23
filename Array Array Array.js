function explode(x) {
    let arr = []
    if (typeof x[0] === 'number' && typeof x[1] === 'number') {
        for (let i = 0; i < x[0] + x[1]; i++) arr.push(x)
    } else if (typeof x[0] === 'number') {
        for (let i = 0; i < x[0]; i++) arr.push(x)
    } else if (typeof x[1] === 'number') {
        for (let i = 0; i < x[1]; i++) arr.push(x)
    } else {
        return 'Void!'
    }
    return arr
}

console.log(explode([9, 3]));
console.log(explode(['a', 3]));
console.log(explode(['a', 'b'])); //Void!