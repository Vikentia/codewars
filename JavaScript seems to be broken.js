function semicolonSeparationToCommaSeparation(input) {
    let res = ''
    let str = input.split('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ';') res += str[i] + ','
    }
    return res.slice(0, -1)
}

console.log(semicolonSeparationToCommaSeparation("1;2;3"));//"1,2,3"