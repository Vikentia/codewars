function divCon(x) {
    return x.reduce((acc, item) => typeof item === 'string' ? acc - +item : acc + item, 0)
}
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));//13