function twoArePositive(a, b, c) {
    return a > 0 && b > 0 && c <= 0 || a > 0 && c > 0 && b <= 0 || c > 0 && b > 0 && a <= 0
}


console.log(twoArePositive(-4, 6, 8));