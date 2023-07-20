function catMouse(x) {
    return Math.abs(x.indexOf('C') - x.indexOf('m')) > 4 ? "Escaped!" : "Caught!"
}

console.log(catMouse('C....m'));//"Escaped!"
console.log(catMouse('C..m'));//"Caught!"
console.log(catMouse('C.....m'));//"Escaped!"
console.log(catMouse("C...m"));//'Caught!'