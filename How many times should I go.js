function howManyTimes(annualPrice, individualPrice) {
    return annualPrice % individualPrice ? Math.floor(annualPrice / individualPrice) + 1 : annualPrice / individualPrice
}

console.log(howManyTimes(30, 10));//3
console.log(howManyTimes(80, 15));//6