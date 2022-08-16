// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Notes
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives , negatives and zeros
// Repetition of numbers in the array/list could occur.
// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

function maxProduct(numbers, size) {
    numbers.sort((a, b) => b - a).length = size
    return numbers.reduce((mult, n) => mult * n, 1)
}

console.log(maxProduct([4, 3, 5], 2));//20
console.log(maxProduct([10, 8, 7, 9], 3));//720
console.log(maxProduct([-4, -27, -15, -6, -1], 2));//4