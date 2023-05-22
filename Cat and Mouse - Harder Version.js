function catMouse(x, j) {
    const arr = x.split('')
    const cat = arr.indexOf('C')
    const dog = arr.indexOf('D')
    const mouse = arr.indexOf('m')

    if (dog < 0 || cat < 0 || mouse < 0) return "boring without all three"
    if (Math.abs(cat - mouse) > j) return "Escaped!"
    if (dog > mouse && dog < cat || dog < mouse && dog > cat) return 'Protected!'
    if (Math.abs(cat - mouse) <= j) return "Caught!"
}

console.log(catMouse('..D.....Cm', 13));//"Caught!"
console.log(catMouse('............C.............D..m...', 8));//"Escaped!"
console.log(catMouse('m.C...', 5));//"boring without all three"
console.log(catMouse('.mDC', 13));//'Protected!'
console.log(catMouse('mC..D.', 1));//'Caught!'