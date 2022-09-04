function tripledouble(num1, num2) {
    for (let i = 0; i < 10; i++) {
        if (('' + num1).includes(`${i}${i}${i}`) && ('' + num2).includes(`${i}${i}`)) return 1
    }
    return 0
}

console.log(tripledouble(451999277, 41177722899));