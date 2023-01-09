function toAcronym(inp) {
    return inp.split(' ').map(e => e[0].toUpperCase()).join('')
}

console.log(toAcronym("Portable Network Graphics"));