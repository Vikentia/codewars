function capitalize(s, arr) {
    return s.split('').map((el, i) => arr.includes(i) ? el.toUpperCase() : el).join('')
};

console.log(capitalize("abracadabra", [2, 6, 9, 10]));//'abRacaDabRA'