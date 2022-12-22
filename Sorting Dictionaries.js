function sortDict(dict) {
    return Object.entries(dict).map(item => [isNaN(+item[0]) ? item[0] : +item[0], item[1]]).sort((a, b) => b[1] - a[1])
}

console.log(sortDict({ 1: 5, 3: 10, 2: 2, 6: 3, 8: 8 }));//[[3,10],[8,8],[1,5],[6,3],[2,2]]

console.log(typeof NaN);