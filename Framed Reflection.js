function mirror(text) {
    const max = text.split(' ').sort((a, b) => b.length - a.length)[0].length;
    const stars = '*'.repeat(max + 4)
    const array = text.split(' ').map(e => '* ' + e.split('').reverse().join('') + ' '.repeat(max - e.length) + ' *')
    return stars + '\n' + array.join('\n') + '\n' + stars
}
console.log(mirror('Hello World'));
console.log(mirror('Codewars'));
console.log(mirror("ne nydtpj xasqrpd khadmxg eg"));
