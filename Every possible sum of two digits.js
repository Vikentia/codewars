function digits(num) {
    const res = []
    let arr = num.toString().split('')
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            res.push(+arr[i] + +arr[j])
        }
    }
    return res
}

console.log(digits(156));//[ 6, 7, 11 ]