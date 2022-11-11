function longestPalindrome(string) {
    if (string === '') return 0;
    if (string.length === 1) return 1;
    let palindromeLength = 1;
    let substringLength = 2;
    while (substringLength <= string.length) {
        for (let i = 0; i < string.length - (substringLength - 1); i++) {
            const sliced = string.slice(i, i + substringLength)
            const reversed = [...sliced].reverse().join('')
            if (sliced === reversed) {
                palindromeLength = substringLength;
                break
            }
        }
    }
    return palindromeLength
}




// const isPalindrome = (s) => {
//     let arr = s.split('')
//     return s === arr.reverse().join('')
// }

// const longestPalindrome = (s) => {
//     let longest = 0
//     let array = s.split('')
//     array.forEach((item, ind) => {
//         array.forEach((elem, ind2) => {
//             ind2 = ind2 + 1
//             let str = s.slice(ind, ind2)
//             if (isPalindrome(str) && longest < str.length) {
//                 longest = str.length
//             }
//         })
//     })
//     return longest
// }
// const longestPalindrome = (s) => {
//     let longest = 0
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j <= s.length; j++) {
//             let str = s.slice(i, j)
//             if (isPalindrome(str) && longest < str.length) {
//                 longest = str.length
//             }
//         }
//     }
//     return longest
// }



console.log(longestPalindrome("baabcd")); //4
console.log(longestPalindrome("baablkj12345432133d")); //9