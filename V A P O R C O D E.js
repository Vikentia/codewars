function vaporcode(string) {
    return string.replace(/ /g, '').split('').map(e => e.toUpperCase()).join('  ')
}

console.log(vaporcode("Lets go to the movies"));