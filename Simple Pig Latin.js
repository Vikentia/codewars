function pigIt(str) {
    return str.split(' ').map(item => {
        return (/[-_!?,\.]/g).test(item) ? item : item.slice(1) + item[0] + 'ay'
    }).join(' ')
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));
console.log(pigIt('Hello world !'));