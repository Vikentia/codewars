function initials(n) {
    return n.split(' ').map((el, i, arr) => i === arr.length - 1 ? el[0].toUpperCase() + el.slice(1) : el[0].toUpperCase()).join('.')
}

console.log(initials('barack hussain Obama'));