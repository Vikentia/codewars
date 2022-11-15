function getWinner(listOfBallots) {
    const obj = {}
    listOfBallots.forEach(item => {
        obj.hasOwnProperty(item) ? obj[item] += 1 : obj[item] = 1
    })
    let arr = Object.entries(obj).sort((a, b) => b[1] - a[1])
    return arr[0][1] > listOfBallots.length / 2 ? arr[0][0] : null
}

console.log(getWinner(["A"]));
console.log(getWinner(["A", "A", "A", "B", "B", "B", "A"]));
console.log(getWinner(["A", "A", "A", "B", "B", "B"]));
console.log(getWinner(["A", "A", "A", "B", "C", "B"]));