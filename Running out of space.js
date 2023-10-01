function spacey(array) {
    return array.map((el, i) => array.slice(0, i + 1).join(''))
}

console.log(spacey(['kevin', 'has', 'no', 'space']));