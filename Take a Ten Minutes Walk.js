function isValidWalk(walk) {
    if (walk.length !== 10) return false
    let w = [], e = [], s = [], n = [];
    walk.forEach(item => {
        item === 'n' && n.push(1)
        item === 'e' && e.push(1)
        item === 'w' && w.push(1)
        item === 's' && s.push(1)
    })
    return n.length === s.length && e.length === w.length
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));