function flyBy(lamps, drone) {
    return lamps.split('').map((e, i) => drone[i] === '=' || drone[i] === 'T' ? 'o' : 'x').join('')
}

console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'));//'ooooooooooxxxxx'