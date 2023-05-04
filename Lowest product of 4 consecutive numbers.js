function lowestProduct(input) {
    if (input.length < 4) return "Number is too small";
    let mult = 0;
    const arr = input.split('')
    for (let i = 0; i < arr.length - 3; i++) {
        if (!i) {
            mult = arr[0] * arr[1] * arr[2] * arr[3]
        } else {
            mult = mult < arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3] ? mult : arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3]
        }
    }
    return mult
}

console.log(lowestProduct("123456789"));//24
console.log(lowestProduct("333"));//"Number is too small"
console.log(lowestProduct("1234111"));//4