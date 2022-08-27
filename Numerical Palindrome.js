function isPalyndrom(number) {
    return Math.abs(number).toString() === Math.abs(number).toString().split('').reverse().join('');
}

function palindrome(num) {
    if (num < 0 || typeof num !== 'number') return "Not valid"
    if (num > 9 && isPalyndrom(num)) {
        return num
    } else {
        if (num < 10) num = 10
        for (let i = 1; ; i++) {
            let numPlus = num + i
            if (isPalyndrom(numPlus)) {
                num = numPlus;
                break;
            }
            let numMinus = num - i
            if (isPalyndrom(numMinus)) {
                num = numMinus;
                break;
            }
        }
    }
    return num
}

console.log(palindrome(8));
console.log(palindrome(281));
console.log(palindrome(1029));
console.log(palindrome(1221));
console.log(palindrome("BGHHGB"));
console.log(palindrome("11029"));
console.log(palindrome(-1029));