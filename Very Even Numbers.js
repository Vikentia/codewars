// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

function isVeryEvenNumber(n) {
    while (n > 9) {
        n = n.toString().split('').reduce((sum, item) => sum += +item, 0)
    }
    return n % 2 === 0
}

console.log(isVeryEvenNumber(88));
console.log(isVeryEvenNumber(222));
console.log(isVeryEvenNumber(5));
console.log(isVeryEvenNumber(841));