// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 1; i <= nFloors; i++) {
        let star = '*'.repeat(2 * i - 1);
        let space = ' '.repeat(nFloors - i);
        tower.push(`${space}${star}${space}`)
    }
    return tower
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));