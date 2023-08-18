function greet(name) {
    return name?.length ? `hello ${name}!` : null
}
console.log(greet(''));