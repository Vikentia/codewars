function isPangram(string) {
    return new Set(string.replace(/[^a-z]/gi, '').toLowerCase()).size === 26
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("Th, over the lazy dog."));