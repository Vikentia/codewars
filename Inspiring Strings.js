function longestWord(stringOfWords) {
    return stringOfWords.split(' ').sort((a, b) => a.length - b.length).reverse()[0]
}

console.log(longestWord('red blue grey'));