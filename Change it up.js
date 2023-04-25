function changer(str) {
    return str.split('').map(e => {
        if (e.toLowerCase() === 'z') return 'A'
        const letter = (/[a-zA-Z]/.test(e)) ? String.fromCharCode((e.toLowerCase()).codePointAt(0) + 1) : e
        return 'aeiou'.includes(letter) ? letter.toUpperCase() : letter
    }).join('')
}

console.log(changer('Alice'));//'bmjdf'
console.log(changer('z'));
console.log(changer('Cat30'));//'dbU30'