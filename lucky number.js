function isLucky(n) {
    return !n || n.toString().split('').reduce((acc, item) => acc + +item, 0) % 9 === 0
}

console.log(isLucky(1892376));
console.log(isLucky(189237));