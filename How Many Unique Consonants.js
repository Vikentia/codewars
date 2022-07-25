// Complete the function that counts the number of unique consonants in a string(made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u".We will count "y" as a consonant.

// Remember, your function needs to return the number of unique consonants - disregarding duplicates.For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases.For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

function countConsonants(str) {
    let arr = str.toLowerCase().split('').filter(item =>
        !"aeiou.?,!-".includes(item) && !isFinite(item)
    )
    return [...new Set(arr)].length
}

console.log(countConsonants("sillystring"));
console.log(countConsonants("712Zj"));