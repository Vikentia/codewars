function elevatorDistance(array) {
    let count = 0
    for (let i = 1; i < array.length; i++) {
        count += Math.abs(array[i - 1] - array[i])
    }
    return count
}

console.log(elevatorDistance([7, 1, 7, 1]));//18