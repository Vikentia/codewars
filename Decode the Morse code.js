const decodeMorse = (morseCode) => {
    return morseCode.split(' ').map(item => item ? MORSE_CODE[item] : ' ').join('').replace(/[ ]+/g, ' ').trim()
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .')); //'HEY JUDE'