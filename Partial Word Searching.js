function wordSearch(query, seq) {
    let arr = seq.filter(el => el.toLowerCase().match(query.toLowerCase()))
    return arr.length ? arr : ['Empty']
}

console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]));//["aB", "Abc", "zAB"]