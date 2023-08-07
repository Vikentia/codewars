function insertDash(num) {
    return num.toString().split('').map((el, i, arr) => +el % 2 && +arr[i + 1] % 2 ? el + '-' : el).join('')
}

console.log(insertDash(454793));//'4547-9-3'