function evenOrOdd(str) {
    let odd = 0
    let even = 0
    str.split('').forEach(el => +el % 2 ? odd += +el : even += +el)
    return odd > even ? 'Odd is greater than Even' : odd === even ? 'Even and Odd are the same' : 'Even is greater than Odd'
}

console.log(evenOrOdd('12'));//'Even is greater than Odd'
console.log(evenOrOdd('123'));//'Odd is greater than Even'
console.log(evenOrOdd('112'));//'Even and Odd are the same'