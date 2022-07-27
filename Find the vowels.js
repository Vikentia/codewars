// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super(the second and fourth letters).

// So given a string "super", we should return a list of[2, 4].

function vowelIndices(word) {
    return word.split('').map((e, i) => 'aouiey'.includes(e.toLowerCase()) ? ++i : 0).filter(e => e)
}

console.log(vowelIndices("orange")) //[1,3,6]