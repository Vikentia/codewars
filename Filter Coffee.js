function search(budget, prices) {
    return prices.filter(item => item <= budget).sort((a, b) => a - b).join(',')
}

console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));//"3,7,7,9,14"