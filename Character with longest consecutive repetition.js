function longestRepetition(s) {
    let arr = s.match(/(.)\1+/gi)
    if (s === '') {
        return ['', 0]
    } else if (arr == null) {
        return [s[0], 1]
    } else {
        arr.sort((a, b) => b.length - a.length)
        return [arr[0][0], arr[0].length]
    }
}


console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("cbdeuuu900"));
console.log(longestRepetition("abbbbb"));
console.log(longestRepetition("aabb"));
console.log(longestRepetition(""));
console.log(longestRepetition("ba"));
