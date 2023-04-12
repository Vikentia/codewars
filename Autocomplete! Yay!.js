function autocomplete(input, dictionary) {
    return dictionary.filter(e => e.toLowerCase().startsWith(input.toLowerCase().replace(/[^a-z]/gi, ''))).slice(0, 5)
}

console.log(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']));//['airplane','airport']