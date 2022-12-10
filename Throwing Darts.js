function scoreThrows(radii) {
    let count = 0
    if (!radii.length) return count
    radii.forEach(item => {
        if (item < 5) count += 10
        if (item >= 5 && item <= 10) count += 5
    })
    if (radii.every(item => item < 5)) count += 100
    return count
}

console.log(scoreThrows([1, 5, 11]));
console.log(scoreThrows([15, 20, 30, 31, 32, 44, 100]));
console.log(scoreThrows([1, 2, 3, 4]));
console.log(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]));