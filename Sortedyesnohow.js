function isSortedAndHow(array) {
    let list = ['yes, ascending', 'yes, descending', 'no']
    let arrASC = [...array].sort((a, b) => a - b)
    let arrDESC = [...array].sort((a, b) => b - a)
    return JSON.stringify(array) === JSON.stringify(arrASC)
        ? list[0]
        : JSON.stringify(array) === JSON.stringify(arrDESC)
            ? list[1]
            : list[2]
}


console.log(isSortedAndHow([15, 7, 3, -8]));