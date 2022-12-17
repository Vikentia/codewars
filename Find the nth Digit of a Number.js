const findDigit = (num, nth) => {
    if (nth <= 0) return -1
    if (String(Math.abs(num)).length < nth) return 0
    return Number(String(Math.abs(num)).substr(-nth, 1))
}

console.log(findDigit(5673, 4)); //5
console.log(findDigit(-2825, 3)); //8
console.log(findDigit(65, 0)); //-1
console.log(findDigit(-456, 4)); //0
console.log(findDigit(0, 20)); //0
console.log(findDigit(24, -8)); //-1