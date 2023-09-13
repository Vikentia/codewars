function initializeNames(name) {
    const arr = name.split(' ')
    return arr.map((el, i) => i !== 0 && i !== arr.length - 1 ? el[0] + '.' : el).join(' ')
}

console.log(initializeNames('Alice Betty Catherine Davis'));//'Alice B. C. Davis'