function lastSurvivor(letters, coords) {
    letters = letters.split('')
    coords.forEach(e => letters.splice(e, 1))
    return letters.join('')
}

console.log(lastSurvivor('zbk', [2, 1]));//z