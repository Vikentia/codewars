function reOrdering(text) {
    return text.split(' ').filter(e => e[0] === e[0].toUpperCase()).concat(text.split(' ').filter(e => e[0] !== e[0].toUpperCase())).join(' ')
}

console.log(reOrdering('wario LoBan hello'));