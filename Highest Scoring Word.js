function high(x) {
    return x
        .split(' ')
        .map(item => ({ word: item, count: item.split('').map(e => e.charCodeAt(0) - 96).reduce((acc, item) => acc + item) }))
        .sort((a, b) => b.count - a.count)[0].word
}

console.log(high('man i need a taxi up to ubud'));