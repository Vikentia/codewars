function rotate(str) {
    const res = [];
    let arr = str.split('')
    for (let i = 0; i < str.length; i++) {
        arr.push(arr.splice(0, 1))
        res.push(arr.join(''))
    }
    return res;
}

console.log(rotate("Hello"));