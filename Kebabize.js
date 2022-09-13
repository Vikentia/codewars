function kebabize(str) {
    return str
        .replace(/[0-9\-]/g, '')
        .split('').map(item => item === item.toUpperCase() ? '-' + item.toLowerCase() : item)
        .join('')
        .replace(/^-/, '')
}
console.log(kebabize('myCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));
console.log(kebabize('zu'));