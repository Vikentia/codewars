function isKiss(words) {
    return words.split(' ').every(el => el.length <= words.split(' ').length) ? "Good work Joe!" : "Keep It Simple Stupid"
}

console.log(isKiss('Joe had a bad day'));
console.log(isKiss('Joe is having no fun'));