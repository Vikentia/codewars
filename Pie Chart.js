function pieChart(obj) {
    obj = JSON.parse(obj)
    let sum = 0
    for (let key in obj) {
        sum += +obj[key]
    }
    for (let key in obj) {
        obj[key] = +((obj[key] / sum * 360).toFixed(2).replace(/0+$/g, ''))
    }
    return JSON.stringify(obj)
}

console.log(pieChart('{ "Hausa": 4, "Yoruba": 5, "Igbo": 6, "Efik": 1, "Edo": 4 }'));
console.log(pieChart('{ "English": 4, "Polish": 12, "Russian": 10, "Spanish": 2 }'));
console.log(pieChart('{ "Android": 500, "iOS": 270, "Microsoft": 230 }'));