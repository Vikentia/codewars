function palindrome(num) {
    if (typeof num !== 'number' || num < 0) return 'Not valid';
    return num.toString() === num.toString().split('').reverse().join('');
}