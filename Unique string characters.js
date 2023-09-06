function solve(a, b) {
    let arr = a.concat(b).split('')
    return arr.filter(el => a.includes(el) && !(b.includes(el)) || !(a.includes(el)) && b.includes(el)).join('')
};

console.log(solve("xyab", "xzca"));//"ybzc"
console.log(solve("xyabb", "xzca"));//"ybbzc"