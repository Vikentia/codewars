function filterEvenLengthWords(words) {
    return words.filter(e => !(e.length % 2))
}

console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']));