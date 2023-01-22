function isLeapYear(year) {
    return !(year % 4) && !!(year % 100) || !(year % 4) && !(year % 400)
}

console.log(isLeapYear(1234));//f
console.log(isLeapYear(1984));//t
console.log(isLeapYear(2000));//t
console.log(isLeapYear(2010));//f
console.log(isLeapYear(2013));//f