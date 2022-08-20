function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) { return false }
    if ((/\D/g).test(pin)) { return false }
    let arr = pin.match(/\d/g)
    return arr.length === 4 || arr.length === 6
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
console.log(validatePIN("-1234"));