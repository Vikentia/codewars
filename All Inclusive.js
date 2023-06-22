function containAllRots(strng, arr) {
    let array = []
    for (let i = 0; i < strng.length; i++) {
        array.push(strng.slice(i) + strng.slice(0, i))
    }
    return array.every(el => arr.includes(el))
}

console.log(containAllRots("", ["bsjq", "qbsj"]));
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]));