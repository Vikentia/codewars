// You are given a list of positive integers.The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits.If present in the list, number 0 will be neutral, hence not fight for either side.

// You should return:

// odds win if number of 1s from odd numbers is larger than 0s from even numbers
// evens win if number of 1s from odd numbers is smaller than 0s from even numbers
// tie if equal, including if list is empty
// Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

function bitsBattle(numbers) {
    let oddsNum = []
    let evensNum = []
    numbers.forEach(item => item % 2 ? evensNum.push(item.toString(2)) : oddsNum.push(item.toString(2)))
    oddsNum = oddsNum.join('').replace(/0/g, '').length
    evensNum = evensNum.join('').replace(/1/g, '').length
    return oddsNum > evensNum ? 'odds win' : oddsNum < evensNum ? 'evens win' : 'tie'
}

console.log(bitsBattle([5, 3, 14]));
console.log(bitsBattle([3, 8, 22, 15, 78]));
console.log(bitsBattle([]));
console.log(bitsBattle([0, 1, 2]));