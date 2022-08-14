// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
// 2332
// 110011
// 54322345
// For this kata, single digit numbers will not be considered numerical palindromes.
// For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.
// Note: Palindromes should be found without permutating num.

function palindrome(num) {
    if (num !== parseInt(num) || num < 0) return 'Not valid';
     return  /(\d)\d?\1/.test(''+num)
 }


console.log(palindrome(2));
console.log(palindrome(1215));
console.log(palindrome(123322367));
console.log(palindrome(-4505));