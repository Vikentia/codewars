function crap(x, bags, cap) {
    if (x.flat().includes('D')) return "Dog!!"
    return x.flat().filter(el => el === '@').length <= bags * cap ? "Clean" : "Cr@p"
}

console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2));//"Clean"
console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 1, 1));//"Cr@p"
console.log(crap([['_', '_'], ['_', '@'], ['D', '_']], 2, 2));//"Dog!!"
