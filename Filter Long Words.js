function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(el => el.length > n)
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));//['quick', 'brown', 'jumps']