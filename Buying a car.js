function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    if (startPriceOld >= startPriceNew) return [0, startPriceOld - startPriceNew]
    let month = 0
    let diff = startPriceOld * ((100 - percentLossByMonth) / 100) - startPriceNew * ((100 - percentLossByMonth) / 100) + savingperMonth
    if (diff >= 0) return [1, Math.round(diff)]
    while (diff <= 0) {
        month += 1
        if (month % 2 === 0) {
            percentLossByMonth += 0.5
        }
        startPriceOld *= (100 - percentLossByMonth) / 100
        startPriceNew *= ((100 - percentLossByMonth) / 100)
        diff = startPriceOld - startPriceNew + savingperMonth * month
    }
    return [month, Math.round(diff)]
}

console.log(nbMonths(2000, 8000, 1000, 1.5));//[6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5));//[0, 4000]
console.log(nbMonths(2800, 3500, 1000, 1));//[1, 307]