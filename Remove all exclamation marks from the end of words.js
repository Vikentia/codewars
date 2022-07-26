function remove(string) {
    return string.split(' ').map(item => item.replace(/!+$/, '')).join(' ')
}
console.log(remove("Hi! Hi!"));
console.log(remove("!Hi!"));
console.log(remove("!!!Hi !!hi!!! !hi"));