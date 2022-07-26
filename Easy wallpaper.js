let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]


function wallpaper(l, w, h) {
    if (!l || !w || !h) return numbers[0]
    let sq = (l + w) * h * 2
    return numbers[Math.ceil(sq / 5.2 * 1.15)]
}

console.log(wallpaper(6.3, 4.5, 3.29));
console.log(wallpaper(7.8, 2.9, 3.29));
console.log(wallpaper(6.3, 5.8, 3.13));