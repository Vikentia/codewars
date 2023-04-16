function firstDup(s) {
    return s.split('').filter((e, i, arr) => arr.includes(e, i + 1))[0]
}

console.log(firstDup('tweet'));//t
console.log(firstDup('Ode to Joy'));//' '