// The vowel substrings in the word codewarriors are o, e, a, io.The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only(both vowels and consonants) and no spaces, return the length of the longest vowel substring.Vowels are any of aeiou.


function solve(s) {
    let max = 0
    let count = 0
    s.split('').forEach(item => {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            count++
        } else { count = 0 }
        max = max > count ? max : count
    });
    return max;
}

console.log(solve("codewarriors"));
console.log(solve("suoidea"));
console.log(solve("ultrarevolutionariees"));
console.log(solve("strengthlessnesses"));